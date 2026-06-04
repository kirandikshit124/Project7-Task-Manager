import { useState, useEffect } from "react";

function TaskForm({ onAddTask, editingTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setDueDate(editingTask.dueDate);
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { title, description, dueDate};
        onAddTask(taskData);
        setTitle("");
        setDescription("");
        setDueDate("");
    };

    return (
        <div className="bg-[#CFF3D3] p-6 rounded-xl shadow-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">
                {editingTask ? "Edit Task" : "Add New Task"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between w-full z-50">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-[25%] p-3 mr-4 rounded-lg bg-white border border-green-100 shadow-md" />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-[75%] p-3 mr-4 h-12.5 rounded-lg bg-white border border-green-100 shadow-md" />
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-[25%] p-3 rounded-lg bg-white border border-green-100 shadow-md" />
                </div>
                <button
                    type="submit"
                    className="bg-[#66B539] hover:bg-[#5aa830] px-5 py-3 rounded-lg font-semibold text-white">
                    {editingTask ? "Update Task" : "Add Task"}</button>
            </form>
        </div>
    );
}

export default TaskForm;