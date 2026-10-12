const TASKS_KEY = "tasks";

export const getTasks = () => {
    try {
        const savedTasks = localStorage.getItem(TASKS_KEY);

        return savedTasks ? JSON.parse(savedTasks) : null;
    } catch {
        return null;
    }
};

export const saveTasks = (tasks) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};