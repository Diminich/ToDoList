import React from 'react';

class TodoListHeader extends React.Component {

    state = {
        error: false,
        title: ''
    };

    onAddTaskClick = () => {
        if (this.state.title === "") {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false,
                title: ''
            })
        }
        this.props.addTask(this.state.title);
    };

    onChangeHandler = (e) => {
        this.setState({error: false})
        this.setState({title: e.currentTarget.value})
    };


    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddTaskClick()
        }
    };

    render = () => {
        let error = this.state.error === true ? 'error' : '';
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onChange={this.onChangeHandler}
                           onKeyPress={this.onKeyPress}
                           className={error}
                           type="text"
                           placeholder="New task name"
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>)
    }
}

export default TodoListHeader;