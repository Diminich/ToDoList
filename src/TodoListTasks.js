import React from 'react';
import TodoListTask from './TodoListTask'

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map ( (task, i) => <TodoListTask title={task.title}
                                                                         isDone={task.isDone} priority={task.priority} key={i} />
        );

        return (

            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

