import React, {ChangeEvent} from 'react';
import {inputEmailAC, inputPasswordAC, loginTC} from "./loginReducer";
import {connect} from "react-redux";

interface IMapDispatchProps {
    inputEmailAC: (e: string) => void
    inputPasswordAC: (e: string) => void
    loginTC: () => void
}

class Login extends React.Component<IMapDispatchProps> {

    inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.inputEmailAC(e.currentTarget.value)
    };

    inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.inputPasswordAC(e.currentTarget.value)
    };

    login = () => {
        this.props.loginTC()
    };

    render() {
        return (
            <div>
                <input onChange={this.inputEmail}/>
                <input type={'password'} onChange={this.inputPassword}/>
                <button onClick={this.login}>Sign in</button>
            </div>
        )
    }
}

export default connect(null, {inputEmailAC, inputPasswordAC, loginTC})(Login);

