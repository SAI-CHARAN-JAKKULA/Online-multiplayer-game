import React from 'react'
import db from './firebase';
import {useContext,useState} from 'react';
import { SignInContext } from './SignIn.context';
import { Link } from 'react-router-dom';
import {BoardContext} from './Board.context';
 function CreateRoom() {
    const context = useContext(SignInContext);
    const {giveRoomid}=useContext(BoardContext);
    const username=context.username;
    const [id, setId] = useState(null)
    const [disablebutton,setDisablebutton]=useState(false);
    let res;
    async function generateroom(){
        setDisablebutton(true);
     res= await db.collection("rooms").add({
        board:Array(9).fill(""),
        roomname:`${username}'s room`,
        users:{user1:username,user2:null},
        whoseturn:null
    })
    setId(res.id);
    console.log("sending roomid from createroom",res.id);
    giveRoomid(res.id);
} 
    
    return (
        <div>
            <h1>Generate Room Id? </h1>
            {(!disablebutton)&&<button onClick={generateroom}>generate</button>}
            <h1>{id}</h1>
            {(id)&&<Link to={`/lobby/${id}`}><button>Join</button></Link>}
        </div>
    )
}

export default CreateRoom
