import React from "react";
import { ButtonWrapper } from './HomeButtonStyle'
import { Link } from 'react-router-dom'

function HomeButton(props){
    return(
        <Link to={props.to} className ={props.classNameLink}><ButtonWrapper className={props.className} id={props.id}>{props.name}</ButtonWrapper></Link>
    )
}

export default HomeButton;