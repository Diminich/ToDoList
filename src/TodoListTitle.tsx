import React, {ChangeEvent} from 'react';
import './App.css';

interface IProps {
    title: string
    updateTitle: (title: string) => void
    deleteTodolist: () => void
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
                        ? <input value={this.state.title} autoFocus={true} onBlur={this.deactivateEditMode}
                                 onChange={this.onTitleChanged}/>
                        : <div className="todoList-header__title">
                            <h3 onClick={this.activateEditMode}>{this.props.title}</h3>
                            < button className='buttonHeaderTitle' onClick={this.props.deleteTodolist}>X</button>
                        </div>


                }
            </>
        );
    }
}

export default TodoListTitle;

