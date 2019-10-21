import React from 'react';
import TodoListTask from './TodoListTask'

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map((task, i) => <TodoListTask task={task}
                                                                            changeStatus={this.props.changeStatus}
                                                                            key={i}/>);
        return(
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

