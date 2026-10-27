import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Task must belong to a user"],
            index: true,
        },
        title: {
            type: String,
            required: [true, "Task title is required"],
            trim: true,
            maxlength: [200, "Title cannot exceed 200 characters"],
        },
        description: {
            type: String,
            trim: true,
            default: "",
        },
        priority: {
            type: String,
            enum: {
                values: ["low", "medium", "high"],
                message: "{VALUE} is not a valid priority",
            },
            default: "medium",
        },
        status: {
            type: String,
            enum: {
                values: ["pending", "in-progress", "completed"],
                message: "{VALUE} is not a valid status",
            },
            default: "pending",
        },
        dueDate: {
            type: Date,
            default: null,
        },
        completedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// Manage completedAt timestamp based on status
taskSchema.pre("save", function () {
    if (this.isModified("status")) {
        if (this.status === "completed" && !this.completedAt) {
            this.completedAt = new Date();
        } else if (this.status !== "completed") {
            this.completedAt = null;
        }
    }
});

taskSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id.toString();
        if (ret.userId) {
            ret.userId = ret.userId.toString();
        }
        delete ret.__v;
        return ret;
    },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
