import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tasks'

export const getAllTasks = () => axios.get(BASE_URL);

// export const createEntry = (entry: any) => axios.post(BASE_URL, entry)
//
// export const deleteEntry = (entryId:number) => axios.delete(BASE_URL + "/" + entryId);
//
// export const getEntryById = (id:number) => axios.get(BASE_URL + "/" + id);
//
// export const updateEntry = (entry: any, id: any) => axios.put(BASE_URL + "/" + id, entry)