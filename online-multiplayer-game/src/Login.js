import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';
import {useContext} from 'react';
import { SignInContext } from './SignIn.context';
function Login() {
    const details=useContext(SignInContext);
    const signIn=()=>{
         auth.signInWithPopup(provider)
         .then((result)=>{
             console.log(result.user.displayName);
             details.dispatch({username:result.user.displayName});
         })
         .catch((error)=>alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login_container'>
                <div className='login_text'>
                    <h1>Sign in to TICTACTOE</h1>
                </div>

                <button onClick={signIn}>Sign in With Google</button>
            </div>
            
        </div>
    )
}

export default Login
