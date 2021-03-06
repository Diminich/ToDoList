export interface ITodo {
    addedDate: string;
    id: string;
    order: number;
    title: string;
    user?: null;
    userId?: number;
    tasks: ITask[];
}

export interface IObj {
    title?: string;
    status?: number;
}

export interface ITask {
    addedDate: string;
    completed: boolean;
    deadline?: null;
    description?: null;
    id: string;
    order: number;
    isDone: boolean;
    priority: number;
    startDate?: null;
    status?: number;
    title: string;
    todoListId: string;
}
