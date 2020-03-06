import React, {ChangeEvent} from 'react';
import './App.css';
import {ITask} from "./types/interface";

interface IState {
    editMode: boolean
    title: string
}

interface IProps {
    task: ITask
    changeStatus: (id: string, status: number) => void
    changeTitle: (id: string, title: string) => void
    deleteTask: (id: string) => void
}

class TodoListTask extends React.Component<IProps, IState> {

    onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>) => {
        let status = e.currentTarget.checked ? 2 : 0;
        this.props.changeStatus(this.props.task.id, status);
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value});
    };

    state: IState = {
        editMode: false,
        title: this.props.task.title
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode= () => {
        this.props.changeTitle(this.props.task.id, this.state.title);
        this.setState({editMode: false});
    };

    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    render = () => {
        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        let priorityTitle = "";
        switch (this.props.task.priority) {
            case 0: priorityTitle = "Low"; break;
            case 1: priorityTitle = "Middle"; break;
            case 2: priorityTitle = "High"; break;
            case 3: priorityTitle = "Urgently"; break;
            case 4: priorityTitle = "Later"; break;
        }
        return (
                <div className={containerCssClass}>
                    <input type="checkbox" checked={this.props.task.status === 2}
                           onChange={this.onIsDoneChanged}/>
                    { this.state.editMode
                        ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                                 value={this.state.title} />
                        : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
                    }, priority: {priorityTitle} <button onClick={this.onDeleteTask}>X</button>
                </div>
        );
    }
}

export default TodoListTask;

