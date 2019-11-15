import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter'


class App extends React.Component {

    state = {

        tasks: [
            {title: 'js', isDone: true, priority: 'Medium'},
            {title: 'HTML', isDone: false, priority: 'low'},
            {title: 'ReactJs', isDone: true, priority: 'high'},
            {title: 'Patterns', isDone: true, priority: 'low'}
        ],

        filterValue: 'All'
    };
    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'Medium'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t !== task) {
                return t;
            } else {
                return {...t, isDone: isDone};
            }
        });
        this.setState({
            tasks: newTasks
        })
    };

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus} tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === 'All') {
                            return true;
                        }
                        if (this.state.filterValue === 'Active') {
                            return false;
                        }
                        if (this.state.filterValue === 'Completed') {
                            return true;
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

