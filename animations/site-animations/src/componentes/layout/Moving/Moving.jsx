import React, { useState } from "react";
import { ContainerReview, BoxMoving, Button, Developer, BoxButton } from "./MovingStyle";
import ModalWrapper from "../../ComponentModal/Modal";
import { Link } from "react-router-dom";
import { NavHeroAirplane } from "../../NavHeroAirplane/NavHero";

function Moving(){
    const [showModal, setShowModal] = useState(false);
    const chaveOpen = '{'
    const chaveDown = '}'

    return(
        <ContainerReview>
             <NavHeroAirplane />
            <BoxMoving>
                <Developer id='developer'>Create by Matheus Pires</Developer>
                <BoxButton>
                    <Button className="right" onClick={() =>setShowModal(true)}>View Code</Button>
                    <Link to='/background'><Button className="left">Library</Button></Link>
                </BoxButton>
                
                {showModal ? <ModalWrapper 
                title='Background Moving'
                html={
                        <p>
                            &lt;/div class = 'moving'&gt; <br />
                            <br />
                            &lt;/div&gt;
                            
                        </p>
                    }

                css= {
                    <p className="text">
                        .moving<span>{chaveOpen}</span>
                        <br />
                        <p className="identify">
                            background: linear-gradient(-45deg, #FF00F4, #FFFFFF, #80FFAC) no-repeat; 
                            <br />
                            background-size: 300% 300%; 
                            <br />
                            animation: GradientExperience 10s infinite; 
                            <br />
                            width: 100%; 
                            <br />
                            min-height: 100vh; 
                            <br />
                            display: flex; 
                            <br />
                            flex-direction: column; 
                            <br />
                            align-items: center; 
                            <br />
                            justify-content: center; 
                            <br />
                            {chaveDown}
                            <br />
                            <br />
                            @keyframes GradientExperience{chaveOpen}
                            <p className="identify">
                                0%{chaveOpen}
                                <br />
                                background-position: 0% 50%;
                                <br />
                                {chaveDown}
                                <br />
                                50%{chaveOpen}
                                <br />
                                background-position: 100% 50%;
                                <br />
                                {chaveDown}
                                <br />
                                100%{chaveOpen}
                                <br />
                                background-position: 0% 50%;
                                <br />
                                {chaveDown}
                                <br />
                            </p>
                        {chaveDown}
                        </p>
                    </p>
                }
                onClose={() => setShowModal(false)}/> : null}
            </BoxMoving>
        </ContainerReview>
    )
}

export default Moving;

