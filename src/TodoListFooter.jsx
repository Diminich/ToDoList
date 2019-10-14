import React from 'react';

class TodoListFooter extends React.Component {
    render = () => {
        let classForAll = this.props.filterValue === 'All' ? 'filter-active' : '';
        let classForComplited = this.props.filterValue === 'Complited' ? 'filter-active' : '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active' : '';
        return (
                    <div className="todoList-footer">
                        <button className={classForAll}>All</button>
                        <button className={classForComplited}>Completed</button>
                        <button className={classForActive}>Active</button>
                    </div>
        );
    }
}

export default TodoListFooter;

