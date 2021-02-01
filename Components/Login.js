import React from 'react';
import Redirect from 'react-dom';

function sayHi(props){
    const userName = props.userName;
    const {history} = props;
    if(!userName){
    return <Redirect to={{pathname:'/'}}></Redirect>
    }
    else return <div>hello {userName}</div>
  }
export default function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <p>Enter user name</p>
            <button onClick={sayHi}>OK</button>
            
        </div>
    )
}
