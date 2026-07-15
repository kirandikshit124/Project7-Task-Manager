import { FaRegEdit } from "react-icons/fa";
import { IoWarningOutline, IoHourglassOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

function TaskCard({ task, onDelete, onToggle, onEdit }) {
    const isOverdue = !task.completed && new Date(task.dueDate) < new Date();
    return (
        <div className="bg-[#CFF3D3] p-5 rounded-xl shadow-md transition">
            <div className="flex items-center justify-between w-full z-50">
                <h3 className="text-xl font-bold">
                    {task.title}</h3>
                <button
                    onClick={() => onEdit(task)}
                    className="text-[#66B539] hover:text-[#5aa830] px-3 py-2 rounded">
                    <FaRegEdit /></button>
            </div>
            <p className="text-gray-600 mt-2">
                {task.description}</p>
            <div className="flex items-center justify-between w-[55%] z-50">
                <p className="mt-3 text-sm text-gray-600">
                    📅 Due: {task.dueDate}</p>
                <div className="mt-3">
                    {isOverdue ? (
                        <span className="text-red-500 px-3 py-1 rounded-full text-xl">
                            <IoWarningOutline /></span>
                    ) : task.completed ? (
                        <span className="text-green-700 px-3 py-1 rounded-full text-xl">
                            <IoCheckmarkCircleOutline /></span>
                    ) : (
                        <span className="text-[#374148] px-3 py-1 rounded-full text-xl">
                            <IoHourglassOutline /></span>
                    )}
                </div>
            </div>
            <div className="flex gap-3 mt-5 flex items-center justify-between w-full z-50">
                <button
                    onClick={() => onToggle(task._id)}
                    className="bg-[#66B539] hover:bg-[#5aa830] px-3 py-2 rounded text-white">
                    Complete</button>
                <button
                    onClick={() => onDelete(task._id)}
                    className="bg-white hover:bg-gray-50 text-gray-600 px-3 py-2 rounded">
                    Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;