
const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";
const SESSION_KEY = "sessionExpiry";
const SESSION_DURATION = 5 * 60 * 1000; // 5 minutes

// Get all registered users
export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

// Add registered users
export function addUsers(newUser) {
    const users = getUsers();
    const userExist = users.find(user => user.username === newUser.username || user.email === newUser.email);
    if (userExist) {
        return;
    }
    users.push(newUser);
    setCurrentUser(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// validate user is exist or not for Login
export function validateUser(username, password) {
    const users = getUsers();
    const userExist = users.find(user => user.username === username && user.password === password);
    return userExist ?? null;
}

// validate username is exist or not for SignIn
export function validateDuplicateUser(username, email) {
    const users = getUsers();
    const userExist = users.find(user => user.username === username || user.email === email);
    return userExist ?? null;
}

// check if user is already logged in
export function isUserLoggedIn() {
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
}

// Save the currently logged-in user
export function setCurrentUser(user) {
    startSession();
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

// Log out the current user
export function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

// Get the currently logged-in user
export function getCurrentUser() {
    return JSON.parse(
        localStorage.getItem(CURRENT_USER_KEY) || "null"
    );
}

// Remove the users data
export function removeUser() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const users = getUsers();
    const updatedUsers = users.filter(
        user => user.username !== currentUser.username
    );
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
    clearCurrentUser();
}


export function startSession() {
    const expiryTime = Date.now() + SESSION_DURATION;

    localStorage.setItem(SESSION_KEY, String(expiryTime));
}

/* Check if the session is valid */
export function isSessionValid() {
    const expiryTime = Number(localStorage.getItem(SESSION_KEY));

    if (!expiryTime || Date.now() >= expiryTime) {
        endSession();
        return false;
    }

    return true;
}

/* End the current session */
export function endSession() {
    localStorage.removeItem(SESSION_KEY);
    clearCurrentUser();
}

