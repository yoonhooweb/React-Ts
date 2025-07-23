import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://52.79.99.190:8500";

export const fetchTodos = async (): Promise<todoType[]> => {
    const res = await axios.get(`${BASE_URL}/todos`);
    return res.data;
};

export const addTodo = async (title: string): Promise<todoType> => {
    const res = await axios.post(`${BASE_URL}/todos`, { title, completed: false });
    return res.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/todos/${id}`);
};

export const handleModifyApi = async (id: number, title: string): Promise<todoType> => {
    const res = await axios.put(`${BASE_URL}/todos/${id}`, { title, completed: false });
    return res.data;
};
