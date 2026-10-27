// Handle 404 Not Found routes
export const notFound = (req, res, next) => {
    const error = new Error(`Resource Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Global error handler
export const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || "An unexpected server error occurred";

    // Handle Mongoose Invalid ObjectId CastError
    if (err.name === "CastError" && err.kind === "ObjectId") {
        statusCode = 400;
        message = `Invalid ID format for: ${err.value}`;
    }

    // Handle Mongoose Validation Error
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((val) => val.message)
            .join(", ");
    }

    // Handle MongoDB duplicate key error (code 11000)
    if (err.code === 11000) {
        statusCode = 400;
        const field = Object.keys(err.keyValue || {})[0] || "field";
        message = `A record with that ${field} already exists.`;
    }

    // Handle JWT errors
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid token authorization.";
    }

    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Token has expired. Please log in again.";
    }

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
};
