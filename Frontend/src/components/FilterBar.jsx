function FilterBar({ filter, setFilter }) {
    return (
        <div className="flex grid grid-cols-3 gap-3">
            <button
                onClick={() => setFilter("all")}
                className="px-4 py-2 bg-white text-[#00752F] rounded-lg hover:bg-gray-50">
                All</button>
            <button
                onClick={() => setFilter("active")}
                className="px-4 py-2 bg-white text-[#00752F] rounded-lg hover:bg-gray-50">
                Pending</button>
            <button
                onClick={() => setFilter("completed")}
                className="px-4 py-2 bg-white text-[#00752F] rounded-lg hover:bg-gray-50">
                Completed</button>
        </div>
    );
}

export default FilterBar;