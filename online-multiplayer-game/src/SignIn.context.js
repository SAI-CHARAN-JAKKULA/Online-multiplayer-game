import React, { createContext, useState ,useReducer} from "react";
export const SignInContext=createContext();
function reducer(state,action){
    return action.username;
}
export default function SignInProvider(props){
    const [username, dispatch] = useReducer(reducer,null);
    return (
    <SignInContext.Provider value={{username,dispatch}}>{props.children}</SignInContext.Provider>)
}