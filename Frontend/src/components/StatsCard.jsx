function StatsCard({ tasks }) {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        task => task.completed
    ).length;

    const pendingTasks = tasks.filter(
        task => !task.completed
    ).length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#CFF3D3] border-slate-200 p-5 rounded-xl shadow-md h-20">
                <p className="text-gray-600 text-sm">Total Tasks</p>
                <p className="text-2xl font-bold text-green-900">{totalTasks}</p>
            </div>
            <div className="bg-[#CFF3D3] border-slate-200 p-5 rounded-xl shadow-md h-20">
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-green-700">{completedTasks}</p>
            </div>
            <div className="bg-[#CFF3D3] border-slate-200 p-5 rounded-xl shadow-md h-20">
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-green-600">{pendingTasks}</p>
            </div>
        </div>
    )
}

export default StatsCard;