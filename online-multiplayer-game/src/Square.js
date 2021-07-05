import './Square.css';
import {BoardContext} from './Board.context';
import React from 'react';
import {useContext} from 'react';
import { SignInContext } from './SignIn.context';
function Square(props){
    const context = useContext(SignInContext);
    const username=context.username;
    const boarddetails=useContext(BoardContext);
    const buttonval=boarddetails.state.board[props.buttonId-1];
    console.log(buttonval);
    const handleClick=()=>{
        const value=props.buttonId-1;
        boarddetails.dispatch({type:"Click",value:value,})
    }
    return(<button className="square" onClick={(boarddetails.state.whoseturn===username)?handleClick:undefined}>{buttonval}</button>)
}
export default Square;
