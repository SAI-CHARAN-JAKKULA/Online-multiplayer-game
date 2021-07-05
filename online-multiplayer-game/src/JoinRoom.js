import React from 'react'
import db from './firebase';
import {useContext,useState,useEffect} from 'react';
import { SignInContext } from './SignIn.context';
import {Link} from 'react-router-dom';
function JoinRoom() {
    const context = useContext(SignInContext);
    const username=context.username;
    const [roomid, setRoomid] = useState("");
    const [redirect,setRedirect]=useState(false);
    const [showform,setShowform]=useState(true);
    // useEffect(() => {
    //     db.collection('rooms').doc(res.id).
    //     onSnapshot(snapshot=>(setState(snapshot.data())))
    // }, [])
    return (
        <div>{(showform)&&
            <form>
                enter roomcode
                <input value={roomid} onChange={(e)=>(setRoomid(e.target.value))} type='text'/>
                <button onClick={(e)=>{{
        e.preventDefault();
       db.collection("rooms").doc(roomid).update({
       'users.user2':username
    })
    setRedirect(true);
    setShowform(false);
    }}}>submit</button>
            </form>}
            {(redirect) && <Link to={`/lobby/${roomid}`}><button>Join</button></Link>}
        </div>
    )
}
export default JoinRoom
