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

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();
    }

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    }

    restoreState = () => {
        this.props.setTasks(this.props.id);
    };


    state = {
        filterValue: "All"
    };

    addTask = (newText) => {
        this.props.addTask(newText, this.props.id);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState();
        });
    };

    changeTask = (taskId, obj) => {
        this.props.tasks.forEach(t => {
            if (t.id === taskId) {
                this.props.updateTask(taskId, {...t, ...obj}, this.props.id)
            }
        })
    };

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {status: status});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    deleteTodolist = () => {
        this.props.deleteTodolist(this.props.id)
    };

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId, this.props.id)
    };

    updateTitle = (title) => {
        this.props.updateTodolistTitle(title, this.props.id)
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
                                       return t.isDone === false;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.isDone === true;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask(newText, todolistId) {
            dispatch(addTaskTC(todolistId, newText));
        },
        setTasks(todolistId) {
            dispatch(setTasksTC(todolistId));
        },
        updateTask(taskId, obj, todolistId) {
            dispatch(updateTaskTC(taskId, obj, todolistId))
        },
        deleteTodolist: (todolistId) => {
            dispatch(deleteTodolistTC(todolistId))
        },
        deleteTask: (taskId, todolistId) => {
            dispatch(deleteTaskTC(taskId, todolistId))
        },
        updateTodolistTitle: (title, todolistId) => {
            dispatch(updateTodolistTitleTC(title, todolistId))
        }
    }
};

const ConnectedTodolist = connect(null, mapDispatchToProps)(TodoList);

export default ConnectedTodolist;

