import React, { createContext, useState ,useReducer, useEffect} from "react";
import db from './firebase';
export const BoardContext=createContext();
export default function BoardWrapper(props){
 const [initialstate,setInitialstate]=useState(null);
 const [roomid,setRoomId]=useState(null);
  const giveRoomid=(e)=>{
     setRoomId(e);
 };
 console.log("boardcontext rendered");
 const reducer=(state,action)=>{
    
    switch (action.type) {
        case "Click":
            const user1=state.users.user1;
            const user2=state.users.user2;
            const newState={...state};
            let presentturn="";
            if(state.whoseturn===user1){
                presentturn=user2;
            }else{
                presentturn=user1;
            }
            newState.board[action.value]=(state.whoseturn===user1?"X":"O");
            console.log(`${state.users.user1} and ${state.users.user2} and ${state.whoseturn}`);
            db.collection("rooms").doc(roomid).update({
                board:newState.board,
                whoseturn:presentturn
             })
            return newState;
        case "updateturn":
            const currentturn=action.value;
            db.collection("rooms").doc(roomid).update({
                whoseturn:currentturn
             })
             return state;
        case "datachange":
            const databaseState=action.value;
            return databaseState;
        default:
          return state;
      }
    };
const [state, dispatch] = useReducer(reducer,null);
 useEffect(() => {
    console.log("listen to roomid");
    if(roomid){
   db.collection('rooms').doc(roomid).
    onSnapshot(snapshot=>{ 
       dispatch({type:"datachange",value:snapshot.data()});
       console.log("datachange");
    })}
}, [roomid])
    return (
        <BoardContext.Provider value={{state,dispatch,giveRoomid}}>
            {props.children}
        </BoardContext.Provider>
    )
}
