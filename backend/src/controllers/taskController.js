import mongoose from "mongoose";
import Task from "../models/Task.js";

// @desc    Get all tasks for the logged in user
// @route   GET /api/tasks
// @access  Private
export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({ userId: req.user._id }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: tasks.length,
            tasks,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single task by ID
// @route   GET /api/tasks/:id
// @access  Private
export const getTaskById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID format",
            });
        }

        const task = await Task.findOne({
            _id: id,
            userId: req.user._id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found or you do not have permission to access it",
            });
        }

        res.status(200).json({
            success: true,
            task,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
export const createTask = async (req, res, next) => {
    try {
        const { title, description, priority, status, dueDate } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: "Task title is required",
            });
        }

        const taskData = {
            userId: req.user._id,
            title: title.trim(),
            description: description ? description.trim() : "",
            priority: priority || "medium",
            status: status || "pending",
        };

        if (dueDate) {
            taskData.dueDate = dueDate;
        }

        if (taskData.status === "completed") {
            taskData.completedAt = new Date();
        }

        const task = await Task.create(taskData);

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update an existing task
// @route   PATCH /api/tasks/:id (also supports PUT)
// @access  Private
export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID format",
            });
        }

        const task = await Task.findOne({
            _id: id,
            userId: req.user._id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found or you do not have permission to modify it",
            });
        }

        const { title, description, priority, status, dueDate } = req.body;

        if (title !== undefined) task.title = title.trim();
        if (description !== undefined) task.description = description.trim();
        if (priority !== undefined) task.priority = priority;
        if (dueDate !== undefined) task.dueDate = dueDate;

        if (status !== undefined) {
            task.status = status;
            if (status === "completed" && !task.completedAt) {
                task.completedAt = new Date();
            } else if (status !== "completed") {
                task.completedAt = null;
            }
        }

        const updatedTask = await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task: updatedTask,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID format",
            });
        }

        const task = await Task.findOneAndDelete({
            _id: id,
            userId: req.user._id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found or you do not have permission to delete it",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            id,
        });
    } catch (error) {
        next(error);
    }
};
