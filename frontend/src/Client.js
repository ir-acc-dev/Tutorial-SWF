import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tasks'

export const getAllTasks = () => axios.get(BASE_URL);

export const createTask = (task) => axios.post(BASE_URL, task)

export const deleteTask = (id) => axios.delete(BASE_URL + "/" + id);

export const getTaskById = (id) => axios.get(BASE_URL + "/" + id);

export const updateTask = (task, id) => axios.put(BASE_URL + "/" + id, task)