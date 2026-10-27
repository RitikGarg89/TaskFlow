import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET || "default_taskflow_jwt_secret_key_change_in_production",
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d",
        }
    );
};

export const sendTokenResponse = (user, statusCode, res, message = "") => {
    const token = generateToken(user._id || user.id);

    const isProduction = process.env.NODE_ENV === "production";
    const cookieOptions = {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    };

    res.cookie("token", token, cookieOptions);

    res.status(statusCode).json({
        success: true,
        message,
        token,
        user: {
            id: user._id ? user._id.toString() : user.id,
            _id: user._id ? user._id.toString() : user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
        },
    });
};
