import React from "react";
import { Link } from "react-router-dom";
import heroairplane from '../../Images/heroairplane.png'
import { Image } from './NavHeroStyle'

export const NavHeroAirplane = () =>{
    return(
        <Link to='/experience'><Image src={heroairplane}/></Link>
    )
}

