import React, {ChangeEvent} from 'react';
import './App.css';

interface IProps {
    title: string
    updateTitle: (title: string) => void
    onDelete: () => void
}

interface IState {
    editMode: boolean
    title: string
}

class TodoListTitle extends React.Component<IProps, IState> {
    state: IState = {
        editMode: false,
        title: this.props.title
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateTitle(this.state.title);
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    render = () => {
        return (
            <>
            {
                this.state.editMode
                    ? <input value={this.state.title} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onTitleChanged}/>
                    : <h3 className="todoList-header__title" onClick={this.activateEditMode}>{this.props.title}
                        <button className='buttonHeaderTitle' onClick={() => this.props.onDelete}>X</button>
                    </h3>
            }
            </>
        );
    }
}

export default TodoListTitle;

