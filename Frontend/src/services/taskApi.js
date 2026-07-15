import axios from 'axios';

const API_URL = 'https://taskora-task-manager-api.onrender.com/api/tasks';

export const getTasks = () => 
    axios.get(API_URL);
export const postTask = (task) =>
  axios.post(API_URL, task);
export const deleteTask = (id) =>
  axios.delete(`${API_URL}/${id}`);
export const toggleTask = (id) =>
  axios.patch(`${API_URL}/${id}/toggle`);
export const updateTask = (id, task) =>
  axios.put(`${API_URL}/${id}`, task);