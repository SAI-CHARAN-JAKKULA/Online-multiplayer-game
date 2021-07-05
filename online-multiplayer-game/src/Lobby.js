import React from 'react'
import db from './firebase';
import {useContext,useState,useEffect} from 'react';
import { SignInContext } from './SignIn.context';
import { Redirect, useParams } from 'react-router-dom';
import {BoardContext} from './Board.context';
import {Link} from 'react-router-dom';
function Lobby() {
    const {roomid}=useParams();
    const [redirect,setRedirect]=useState(false);
    const context = useContext(SignInContext);
    const username=context.username;
    const {state,giveRoomid,dispatch}=useContext(BoardContext);
    if(!state){
        giveRoomid(roomid);
    }
    const [user1,setUser1]=useState(null);
    const [user2,setUser2]=useState(null);
    useEffect(() => {
        if(state){
     setUser1(state.users.user1);
     setUser2(state.users.user2);
     if(state.whoseturn){setRedirect(true);}
    } 
    }, [state])
    if(username===user1&&user2){dispatch({type:"updateturn",value:user1})}
    const handleClick=()=>{
        setRedirect(true); 
    }

    return (
        <div>
            {(redirect)&&<Redirect to='/game'/>}
            <h1>Lobby</h1>
            <h1>players</h1>
           {(user1) && <h2>1.{user1}</h2>}
           {(user2)&&<h2>2.{user2}</h2>}
            {(username===user1&&user2)&& <button onClick={handleClick}>Start</button>}
            {(username===user1&&!user2)&&<h1>waiting for the second player to join</h1>}
            {(username!==user1)&&<h1>waiting for the admin to start</h1>}
        </div>
    )
}

export default Lobby
