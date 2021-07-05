import React from 'react'
import './Home.css';
import {useContext} from 'react';
import { SignInContext } from './SignIn.context';
import { Link } from 'react-router-dom';
function Home() {
    const context = useContext(SignInContext);
    const username=context.username;
    return (
        <div className='gameArea'>
            <h1>Welcome {username}</h1>
            <h3>Choose mode</h3>
            <Link to='/createroom'><button>Create room</button></Link>
            <button>local </button>
            <Link to='/joinroom'><button>Join room</button></Link>
        </div>
    )
}

export default Home