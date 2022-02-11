import React, { useEffect, useState } from "react";
import { ContainerReview, Developer, Button, BoxButton} from "../Moving/MovingStyle";
import { BoxTypeWriter } from "./TypeWriterStyle";
import { Link } from "react-router-dom";
import ModalWrapper from "../../ComponentModal/Modal";
import { NavHeroAirplane } from "../../NavHeroAirplane/NavHero";
import { maquinaEscrever } from "../Home/maquinaEscrever";


function TypeWriter(){
    const [showModal, setShowModal] = useState(false);
    const chaveOpen = '{'
    const chaveDown = '}'
    const timeout = 'setTimeOut'
    const arrow = '=>' 

    useEffect(() => {
        const developer = document.getElementById('developer')
        developer.style.opacity = 0
            developer.style.opacity = 1
            maquinaEscrever(developer);

    }, [])

    return(
        <ContainerReview>
             <NavHeroAirplane />
            <BoxTypeWriter>
                <Developer id='developer'>Create by Matheus Pires</Developer>
                <BoxButton>
                    <Button className="right" onClick={() =>setShowModal(true)}>View Code</Button>
                    <Link to='/text'><Button className="left">Library</Button></Link>
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
                        .writer:after{chaveOpen}
                        <p className="identify">
                            content: '|';
                            <br />
                            margin-left: 5px;
                            <br />
                            opacity: 1;
                            <br />
                            animation: Line .7s infinite;
                            <br />
                            {chaveDown}
                            <br />
                            <br />
                            @keyframes Line{chaveOpen}
                            <br />
                            0%,100%{chaveOpen}
                            <br />
                            opacity: 1;
                            <br />
                                {chaveDown}
                            <br />
                            50%{chaveOpen}
                            <br />
                            opacity: 0;
                            <br />
                                {chaveDown}
                            <br />
                            {chaveDown}
                                <br />
                            {chaveDown}
                        </p>
                        <br />
                        <br />
                    </p>
                    
                }
                javascript= {
                   <p>
                        function maquinaEscrever(texto){chaveOpen}
                        <br />
                        <p className="identify">
                            const textoArray = texto.innerHTML.split('');
                            <br />
                            texto.innerHTML = '';
                            <br />
                            textoArray.forEach((letra, index) {arrow} {chaveOpen}

                            <p className="identify">
                                {timeout}(() {arrow} {chaveOpen}
                                <br />
                                texto.style.opacity = 1
                                <br />
                                texto.innerHTML += letra
                                <br /> 
                                {chaveDown}, 65 * index);    
                                <br />
                            </p>
                            {chaveDown})
                        </p>
                    {chaveDown}   
                    <br />
                    maquinaEscrever(texto a ser lido)
                   </p>
                }
                onClose={() => setShowModal(false)}/> : null}
            </BoxTypeWriter>
        </ContainerReview>
    )
}

export default TypeWriter;