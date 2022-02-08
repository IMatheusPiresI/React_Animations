import React from "react";
import { ContainerCardAnimation, CardAnimation, NomeAnimation } from "./CardStyle";
import { IoIosColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";

function CardAnimations(props){
    return(
        <ContainerCardAnimation>
            <Link to={props.to} className = 'link-animation'>
                <CardAnimation className={props.cardAnimation}>
                        <IoIosColorPalette className="svg-card-animation"/>
                        <NomeAnimation>{props.nomeAnimation}</NomeAnimation>
                </CardAnimation>
            </Link>
        </ContainerCardAnimation>
    )
}

export default CardAnimations;

