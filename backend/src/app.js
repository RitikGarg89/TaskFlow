import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// Allowed origins for CORS (support local Vite and configurable origins)
const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",").map((s) => s.trim())
    : ["http://localhost:5173", "http://127.0.0.1:5173"];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
            if (!origin) return callback(null, true);
            if (
                allowedOrigins.includes(origin) ||
                allowedOrigins.includes("*") ||
                process.env.NODE_ENV !== "production"
            ) {
                return callback(null, true);
            }
            return callback(new Error("CORS origin not allowed: " + origin));
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "ok",
        message: "TaskFlow backend is operational",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

// Mount API routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// 404 Handler
app.use(notFound);

// Centralized Error Handler
app.use(errorHandler);

export { app };