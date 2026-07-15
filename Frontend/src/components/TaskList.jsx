import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete, onToggle,onEdit,}) {
    if (tasks.length === 0) {
        return (
            <div className="bg-[#CFF3D3] rounded-2xl items-center justify-between w-full z-50 py-10">
                <h3 className="text-4xl text-center font-bold mb-4">No Tasks Found Yet</h3>
                <p className="text-center mb-4">Create your first task.</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onEdit={onEdit}/>
            ))}
        </div>
    );
}

export default TaskList;