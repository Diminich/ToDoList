import {
    ADD_TASK,
    ADD_TODOLIST,
    DELETE_TASK,
    DELETE_TODOLIST,
    SET_TASKS,
    SET_TODOLISTS, UPDATE_TASK,
    UPDATE_TODOLIST_TITLE
} from "../reducer";
import {ITask, ITodo} from "./interface";

export type ITodolist =
    ISetTasks | ISetTodolist | IAddTodolist | IDeleteTodlist
    | IUpdateTodolistTitle | IDeleteTask | IAddTask | IUpdateTask

export interface ISetTasks {
    type: typeof SET_TASKS
    todolistId: string
    tasks: ITask[]
}

export interface ISetTodolist {
    type: typeof SET_TODOLISTS
    todolists: ITodo[]
}

export interface IAddTodolist {
    type: typeof ADD_TODOLIST
    newTodolist: ITodo
}

export interface IDeleteTodlist {
    type: typeof DELETE_TODOLIST
    todolistId: string
}

export interface IUpdateTodolistTitle {
    type: typeof UPDATE_TODOLIST_TITLE
    todolistId: string
    title: string
}

export interface IDeleteTask {
    type: typeof DELETE_TASK
    todolistId: string
    taskId: string
}

export interface IAddTask {
    type: typeof ADD_TASK
    todolistId: string
    newTask: ITask
}

export interface IUpdateTask {
    type: typeof UPDATE_TASK
    todolistId: string
    taskId: string
    obj: ITodo
}