import axios from "axios";
import {ITask} from "./types/interface";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {"API-KEY": "3af6bfa5-65e5-4eec-88f6-fc8f87e12121"}
});

export const api = {
    createTask(newTaskTitle: string, todolistId: string) {
        return instance.post(`/todo-lists/${todolistId}/tasks`, {title: newTaskTitle});
    },

    createTodolist(title: string) {
        return instance.post("/todo-lists", {title: title})
    },

    getTodolists() {
        return instance.get("/todo-lists");
    },

    updateTask(task: ITask) {
        return instance.put(`/todo-lists/tasks`, task);
    },

    deleteTodolist(id: string) {
        return instance.delete(`/todo-lists/${id}`)
    },

    deleteTask(taskId: string, todolistId:string) {
        debugger
        return instance.delete(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },

    getTasks(todolistId: string) {
        return instance.get(`/todo-lists/${todolistId}/tasks`)
    },

    updateTodolistTitle(title: string, todolistId: string) {
        return instance.put(`/todo-lists/${todolistId}`, {title: title})
    },

    login (email: string, password: string | number) {
        return instance.post(`/auth/login`, {email, password})
    },

    logout () {
        return instance.delete(`/auth/login`);
    }
};




