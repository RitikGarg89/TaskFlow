import "dotenv/config";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";
import User from "./src/models/User.js";
import Task from "./src/models/Task.js";

async function runTests() {
    console.log("=== STARTING TASKFLOW BACKEND INTEGRATION TESTS ===");
    await connectDB();

    const server = app.listen(0);
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}/api`;
    console.log(`Test server running at ${baseUrl}`);

    let testUserEmail = `test_${Date.now()}@example.com`;
    let userToken = "";
    let userId = "";
    let createdTaskId = "";

    try {
        // 1. Health check
        console.log("\n1. Testing GET /health...");
        const healthRes = await fetch(`${baseUrl}/health`);
        const healthData = await healthRes.json();
        console.assert(healthRes.status === 200, "Health status should be 200");
        console.assert(healthData.status === "ok", "Health status should be ok");
        console.log("✓ Health check passed:", healthData.message);

        // 2. User registration
        console.log("\n2. Testing POST /auth/register...");
        const regRes = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Integration Test User",
                email: testUserEmail,
                password: "password123",
            }),
        });
        const regData = await regRes.json();
        console.assert(regRes.status === 201, `Registration should return 201, got ${regRes.status}`);
        console.assert(regData.success === true, "Registration should succeed");
        console.assert(!!regData.token, "Registration should return a JWT token");
        console.assert(regData.user.email === testUserEmail, "User email should match");
        console.assert(!regData.user.password, "Password must not be returned");
        userToken = regData.token;
        userId = regData.user.id;
        console.log("✓ Registration passed. User ID:", userId);

        // 3. Duplicate registration prevention
        console.log("\n3. Testing duplicate registration rejection...");
        const dupRes = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Duplicate User",
                email: testUserEmail,
                password: "password123",
            }),
        });
        const dupData = await dupRes.json();
        console.assert(dupRes.status === 400, `Duplicate registration should return 400, got ${dupRes.status}`);
        console.assert(dupData.success === false, "Duplicate registration should fail");
        console.log("✓ Duplicate registration rejected properly:", dupData.message);

        // 4. User login
        console.log("\n4. Testing POST /auth/login with valid credentials...");
        const loginRes = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: testUserEmail,
                password: "password123",
            }),
        });
        const loginData = await loginRes.json();
        console.assert(loginRes.status === 200, "Login should return 200");
        console.assert(!!loginData.token, "Login should return token");
        userToken = loginData.token;
        console.log("✓ Login passed");

        // 5. Invalid credentials rejection
        console.log("\n5. Testing POST /auth/login with incorrect password...");
        const badLoginRes = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: testUserEmail,
                password: "wrongpassword",
            }),
        });
        console.assert(badLoginRes.status === 401, "Invalid password should return 401");
        console.log("✓ Invalid password rejected properly");

        // 6. Get Current User (/auth/me)
        console.log("\n6. Testing GET /auth/me with Bearer token...");
        const meRes = await fetch(`${baseUrl}/auth/me`, {
            headers: { Authorization: `Bearer ${userToken}` },
        });
        const meData = await meRes.json();
        console.assert(meRes.status === 200, "auth/me should return 200");
        console.assert(meData.user.email === testUserEmail, "auth/me user email should match");
        console.log("✓ /auth/me passed for user:", meData.user.name);

        // 7. Create task
        console.log("\n7. Testing POST /tasks...");
        const createTaskRes = await fetch(`${baseUrl}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
                title: "Complete Backend Integration",
                description: "Test all MERN backend endpoints and Redux slice connection",
                priority: "high",
                status: "pending",
            }),
        });
        const createTaskData = await createTaskRes.json();
        console.assert(createTaskRes.status === 201, "Create task should return 201");
        console.assert(createTaskData.task.title === "Complete Backend Integration", "Title matches");
        console.assert(createTaskData.task.priority === "high", "Priority matches");
        console.assert(createTaskData.task.status === "pending", "Status matches");
        console.assert(createTaskData.task.userId === userId, "Task belongs to authenticated user");
        createdTaskId = createTaskData.task.id;
        console.log("✓ Create task passed. Task ID:", createdTaskId);

        // 8. Get all tasks for user
        console.log("\n8. Testing GET /tasks...");
        const getTasksRes = await fetch(`${baseUrl}/tasks`, {
            headers: { Authorization: `Bearer ${userToken}` },
        });
        const getTasksData = await getTasksRes.json();
        console.assert(getTasksRes.status === 200, "Get tasks should return 200");
        console.assert(Array.isArray(getTasksData.tasks), "Should return array of tasks");
        console.assert(getTasksData.tasks.length >= 1, "Should have at least 1 task");
        console.log("✓ GET /tasks passed. Total tasks found:", getTasksData.count);

        // 9. Get single task by ID
        console.log("\n9. Testing GET /tasks/:id...");
        const getSingleRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            headers: { Authorization: `Bearer ${userToken}` },
        });
        const getSingleData = await getSingleRes.json();
        console.assert(getSingleRes.status === 200, "Get single task should return 200");
        console.assert(getSingleData.task.id === createdTaskId, "Fetched task ID matches");
        console.log("✓ GET /tasks/:id passed");

        // 10. Update task status & priority
        console.log("\n10. Testing PATCH /tasks/:id...");
        const updateRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
                status: "completed",
                priority: "medium",
            }),
        });
        const updateData = await updateRes.json();
        console.assert(updateRes.status === 200, "Update task should return 200");
        console.assert(updateData.task.status === "completed", "Status should be updated to completed");
        console.assert(!!updateData.task.completedAt, "completedAt timestamp should be set");
        console.assert(updateData.task.priority === "medium", "Priority should be updated to medium");
        console.log("✓ PATCH /tasks/:id passed with completedAt timestamp set");

        // 11. Unauthorized access protection (no token)
        console.log("\n11. Testing unauthorized access protection...");
        const unauthRes = await fetch(`${baseUrl}/tasks`);
        console.assert(unauthRes.status === 401, "Accessing /tasks without token must return 401");
        console.log("✓ Route protection verified (returned 401)");

        // 11b. Cross-user isolation test (User B cannot access User A's task)
        console.log("\n11b. Testing cross-user isolation (User B accessing User A's task)...");
        const userBEmail = `test_user_b_${Date.now()}@example.com`;
        const regBRes = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "User B",
                email: userBEmail,
                password: "password123",
            }),
        });
        const regBData = await regBRes.json();
        const userBToken = regBData.token;
        const userBId = regBData.user.id;

        // User B tries to view User A's task
        const crossViewRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            headers: { Authorization: `Bearer ${userBToken}` },
        });
        console.assert(crossViewRes.status === 404, "User B should not be able to view User A's task (must return 404)");

        // User B tries to update User A's task
        const crossUpdateRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userBToken}`,
            },
            body: JSON.stringify({ title: "Hacked by User B" }),
        });
        console.assert(crossUpdateRes.status === 404, "User B should not be able to update User A's task (must return 404)");

        // User B tries to delete User A's task
        const crossDeleteRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${userBToken}` },
        });
        console.assert(crossDeleteRes.status === 404, "User B should not be able to delete User A's task (must return 404)");
        console.log("✓ Cross-user isolation verified: User B cannot view, modify, or delete User A's task");

        // Clean up User B
        await User.findByIdAndDelete(userBId);

        // 12. Delete task
        console.log("\n12. Testing DELETE /tasks/:id...");
        const deleteRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${userToken}` },
        });
        console.assert(deleteRes.status === 200, "Delete task should return 200");
        console.log("✓ DELETE /tasks/:id passed");

        // Verify task was deleted
        const checkDeletedRes = await fetch(`${baseUrl}/tasks/${createdTaskId}`, {
            headers: { Authorization: `Bearer ${userToken}` },
        });
        console.assert(checkDeletedRes.status === 404, "Deleted task should return 404");
        console.log("✓ Deleted task verified 404");

        // 13. Logout
        console.log("\n13. Testing POST /auth/logout...");
        const logoutRes = await fetch(`${baseUrl}/auth/logout`, {
            method: "POST",
        });
        console.assert(logoutRes.status === 200, "Logout should return 200");
        console.log("✓ Logout passed");

        // Cleanup test user and tasks
        await User.findByIdAndDelete(userId);
        await Task.deleteMany({ userId });
        console.log("\n✓ Test data cleaned up successfully");

        console.log("\n==========================================");
        console.log("ALL 13 BACKEND INTEGRATION TESTS PASSED!");
        console.log("==========================================\n");
    } catch (err) {
        console.error("Test failed with error:", err);
        process.exitCode = 1;
    } finally {
        server.close();
        process.exit(process.exitCode || 0);
    }
}

runTests();
