import axios from "axios";
import {ITask} from "./types/interface";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "3af6bfa5-65e5-4eec-88f6-fc8f87e12121"}
});

export const api = {
    createTask(newTaskTitle: string, todolistId: string) {
        return instance.post(`/${todolistId}/tasks`, {title: newTaskTitle});
    },
    createTodolist(title: string) {
        return instance.post("", {title: title})
    },
    getTodolists() {
        return instance.get("");
    },
    updateTask(task: ITask) {
        return instance.put(`/tasks`,  task);
    },
    deleteTodolist(id: string) {
        return instance.delete("/" + id)
    },
    deleteTask(id: string) {
        return instance.delete(`/tasks/${id}`)
    },
    getTasks(todolistId: string) {
        return instance.get(`/${todolistId}/tasks`)
    },
    updateTodolistTitle(title: string, todolistId: string) {
        return instance.put(`/${todolistId}`, {title: title})
    }
};




