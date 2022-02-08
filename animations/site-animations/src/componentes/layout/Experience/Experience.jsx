import React, { useEffect } from "react";
import { ContainerExperience, BoxExperience, TitleExperience, BoxAnimations } from './ExperienceStyle.js'
import heroairplane from '../../../Images/heroairplane.png'
import { CardLibrary } from "../../CardLibrary/CardLibrary.jsx";
import { maquinaEscrever } from "../Home/maquinaEscrever.js";

function Experience(){

    useEffect(() =>{
            const titleLoading = document.querySelector('#title-loading');
            setTimeout(()=>{
                titleLoading.style.opacity = 0.5;
                maquinaEscrever(titleLoading);
            }, 2850);
            
            setTimeout(()=>{
                titleLoading.innerHTML = 'Animation library';
                titleLoading.classList.add('shadowtitle');
                maquinaEscrever(titleLoading);
            }, 5000);
            
            setTimeout(() =>{
                const boxanimations = document.getElementById('boxanimations');
                boxanimations.style.display = 'flex';
                boxanimations.classList.add('boxanimations');
            }, 6000);
        }
    )
    return(
        <ContainerExperience>
            <img className="heroairplane" src={heroairplane} alt="Hero Airplane" id="heroairplane"/>
            <BoxExperience>
                <TitleExperience id='title-loading'>Loading...</TitleExperience>
                <BoxAnimations id="boxanimations">
                   <CardLibrary
                        to ='/background'
                        titleClass = 'titleAnimation'
                        descriptionClass = 'titleAnimation'
                        title ='Background'
                        description='Background animations created with JavaScript and CSS. Toggling the gradient and creating effects.'
                   />
                   <CardLibrary
                        to ='/text'
                        titleClass = 'titleAnimation'
                        descriptionClass = 'titleAnimation'
                        title ='Text'
                        description='Text animations created with JavaScript (typewriter) and CSS (title changing color), among others that change the text.'
                   />
                   <CardLibrary
                        to ='/transform'
                        titleClass = 'titleAnimation'
                        descriptionClass = 'titleAnimation'
                        title ='Transforms'
                        description='Transformation animations, changing positions, rotations and effects with hover or changing the appearance of elements.'
                   />
                </BoxAnimations>
            </BoxExperience>
        </ContainerExperience>

        
    )
}

export default Experience;