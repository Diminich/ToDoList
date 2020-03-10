import React from 'react';
import {connect} from "react-redux";
import {logoutTC} from "./loginReducer";

interface IMapDispatchProps {
    logoutTC: () => void
}

const LogOut = (props: IMapDispatchProps) => {

 return (
     <div>
         <button className={'button_logOut'} onClick={props.logoutTC}>Log out</button>
     </div>
 )
};

export default connect (null, {logoutTC})(LogOut)