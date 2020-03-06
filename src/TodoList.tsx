import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    addTaskTC,
    deleteTaskTC,
    deleteTodolistTC,
    setTasksTC,
    updateTaskTC,
    updateTodolistTitleTC
} from "./reducer";
import {IObj, ITask} from "./types/interface";

interface IProps {
    id: string
    title: string
    tasks: ITask[]
}

interface IState {
    filterValue: string
}

interface IMapDispatchProps {
    addTaskTC: (newText: string, id: string) => void
    setTasksTC: (id: string) => void
    updateTaskTC: (taskId: string, task: ITask, id: string) => void
    deleteTodolistTC: (id: string) => void
    deleteTaskTC: (taskid: string, id: string) => void
    updateTodolistTitleTC: (title: string, id: string) => void
}

class TodoList extends React.Component<IProps & IMapDispatchProps> {

    // constructor(props) {
    //     super(props);
    //     this.newTasksTitileRef = React.createRef();
    // }

    componentDidMount() {
        this.restoreState();
    }

    // saveState = () => {
    //     // переводим объект в строку
    //     let stateAsString = JSON.stringify(this.state);
    //     // сохраняем нашу строку в localStorage под ключом "our-state"
    //     localStorage.setItem("our-state-" + this.props.id, stateAsString);
    // };

    restoreState = () => {
        this.props.setTasksTC(this.props.id);
    };


    state: IState = {
        filterValue: "All"
    };

    addTask = (newText: string) => {
        this.props.addTaskTC(newText, this.props.id);
    };

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            // this.saveState();
        });
    };

    changeTask = (taskId: string, obj: IObj) => {
        this.props.tasks.forEach(t => {
            if (t.id === taskId) {
                this.props.updateTaskTC(taskId, {...t, ...obj}, this.props.id)
            }
        })
    };

    changeStatus = (taskId: string, status: number) => {
        debugger
        this.changeTask(taskId, {status});
    };

    changeTitle = (taskId: string, title: string) => {
        this.changeTask(taskId, {title});
    };

    deleteTodolist = () => {
        this.props.deleteTodolistTC(this.props.id)
    };

    deleteTask = (taskId: string) => {
        this.props.deleteTaskTC(taskId, this.props.id)
    };

    updateTitle = (title: string) => {
        this.props.updateTodolistTitleTC(title, this.props.id)
    };

    render = () => {
        let {tasks = []} = this.props;
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title} onDelete={this.deleteTodolist}
                                   updateTitle={this.updateTitle}/>
                    <AddNewItemForm addItem={this.addTask}/>

                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return !t.isDone;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.isDone;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

export default connect(
    null,
    {
        addTaskTC,
        setTasksTC,
        updateTaskTC,
        deleteTodolistTC,
        deleteTaskTC,
        updateTodolistTitleTC
    }
)(TodoList);

