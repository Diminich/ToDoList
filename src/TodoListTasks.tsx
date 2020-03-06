import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {ITask, ITodo} from "./types/interface";

interface IProps {
    tasks: ITask[]
    changeStatus: (id: string, status: number) => void
    changeTitle: (id: string, title: string) => void
    deleteTask: (id: string) => void
}

class TodoListTasks extends React.Component<IProps> {
    render = () => {

        let tasksElements = this.props.tasks.map( (task) => <TodoListTask task={task}
                                                                        changeStatus={this.props.changeStatus}
                                                                        changeTitle={this.props.changeTitle}
                                                                        deleteTask={this.props.deleteTask}
                                                                        />);

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

