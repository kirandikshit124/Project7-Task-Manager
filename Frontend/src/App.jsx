import { useEffect, useState } from "react";
import { getTasks, postTask, deleteTask, toggleTask, updateTask } from "./services/taskApi";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import StatsCard from "./components/StatsCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(
          editingTask.id,
          taskData
        );
        setEditingTask(null);
      } else {
        await postTask(taskData);
      }
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this task?");
      if (!confirmed) return;
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleTask = async (id) => {
    try {
      await toggleTask(id);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const sortedTasks = [...tasks].sort(
    (a, b) => b.id - a.id
  );
  const filteredTasks = sortedTasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === "active") {
      return matchesSearch && !task.completed;
    }
    if (filter === "completed") {
      return matchesSearch && task.completed;
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#66B539]">
      <div className="max-w-6xl mx-auto p-6">
        <Header />
        <StatsCard tasks={tasks} />
        <div className="mt-6">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} />
        </div>
        <div className="mt-8">
          <TaskForm
            onAddTask={handleAddTask}
            editingTask={editingTask} />
        </div>
        <div className="mt-4">
          <FilterBar
            filter={filter}
            setFilter={setFilter} />
        </div>
        <div className="mt-8">
          <TaskList
            tasks={filteredTasks}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            onEdit={handleEditTask} />
        </div>
        <footer className="text-center mt-12 text-slate-50">
          Built with React, Express & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default App;
