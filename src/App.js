import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTanks from './TodoListTanks';
import TodoListFooter from './TodoListFooter'


class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                <TodoListHeader />
                <TodoListTanks />
                <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

