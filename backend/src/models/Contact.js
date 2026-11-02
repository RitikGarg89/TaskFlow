import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your full name"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [100, "Name cannot exceed 100 characters"],
        },
        email: {
            type: String,
            required: [true, "Please provide your email address"],
            lowercase: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Please provide a valid email address",
            ],
            maxlength: [100, "Email cannot exceed 100 characters"],
        },
        subject: {
            type: String,
            required: [true, "Please provide a subject"],
            trim: true,
            minlength: [3, "Subject must be at least 3 characters"],
            maxlength: [200, "Subject cannot exceed 200 characters"],
        },
        message: {
            type: String,
            required: [true, "Please provide your message"],
            trim: true,
            minlength: [10, "Message must be at least 10 characters"],
            maxlength: [2000, "Message cannot exceed 2000 characters"],
        },
    },
    {
        timestamps: true,
    }
);

contactSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        return ret;
    },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;

