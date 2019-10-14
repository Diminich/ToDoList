import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.newTaskTitleRef = React.createRef();

        setTimeout(() => {
            let newTask = {
                title: 'blaBla',
                isDone: false,
                priority: 'Medium'
            };

            let newTasks = [...this.state.tasks, newTask];

            this.setState({
                tasks: newTasks
            });
        }, 2000);
    }

    state = {

        tasks: [
            { title: 'js', isDone: true, priority: 'Medium' },
            { title: 'HTML', isDone: true, priority: 'low' },
            { title: 'ReactJs', isDone: true, priority: 'high' },
            { title: 'Patterns', isDone: true, priority: 'low' }
        ],

        filterValue: 'All'
    };
    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'Medium'
        };

        this.newTaskTitleRef.current.value = '';

        let newTasks = [...this.state.tasks, newTask];

        this.setState({
            tasks: newTasks
        });
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader setTimeout={this.setTimeout} newTaskTitleRef={this.newTaskTitleRef} onAddTaskClick={this.onAddTaskClick} />
                    <TodoListTasks tasks={this.state.tasks} />
                    <TodoListFooter filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

