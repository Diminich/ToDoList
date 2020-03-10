import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistTC, setTodolistsTC} from "./reducer";
import {RootState} from "./store";
import {ITodo} from "./types/interface";
import Login from "./Login";
import LogOut from './LogOut';


interface IMapStateProps {
    todolists: ITodo[]
    isLogin: boolean
}

interface IMapDispatchProps {
    setTodolistsTC: () => void
    addTodolistTC: (title: string) => void
}

class App extends React.Component<IMapStateProps & IMapDispatchProps> {

    nextTodoListId = 0;

    // state: IState = {
    //     todolists: []
    // }

    addTodoList = (title: string) => {
        this.props.addTodolistTC(title)
    };


    componentDidMount() {
        this.restoreState();
    };


    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("todolists-state", stateAsString);
    // };

    restoreState = () => {
        this.props.setTodolistsTC();
    };


    // ___restoreState = () => {
    //     // объявляем наш стейт стартовый
    //     let state = this.state;
    //     // считываем сохранённую ранее строку из localStorage
    //     let stateAsString = localStorage.getItem("todolists-state");
    //     // а вдруг ещё не было ни одного сохранения?? тогда будет null.
    //     // если не null, тогда превращаем строку в объект
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
    //     this.setState(state, () => {
    //         this.state.todolists.forEach(t => {
    //             if (t.id >= this.nextTodoListId) {
    //                 this.nextTodoListId = t.id + 1;
    //             }
    //         })
    //     });
    // };

    render = () => {
        const todolists = this.props.todolists
            .map((tl) => <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>);
        return (
            <div>
                {this.props.isLogin ?
                    <div>
                        <div>
                            <AddNewItemForm addItem={this.addTodoList}/>
                            <LogOut />
                        </div>
                        <div className="App">
                            {todolists}
                        </div>
                    </div> : <Login/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): IMapStateProps => {
    return {
        todolists: state.todolist.todolists,
        isLogin: state.login.isLogin
    }
};

export default connect(mapStateToProps, {addTodolistTC, setTodolistsTC})(App);