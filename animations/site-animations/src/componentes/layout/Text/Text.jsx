import React, { useEffect } from 'react'
import CardAnimations from '../../CardAnimations/CardAnimations'
import { maquinaEscrever } from '../Home/maquinaEscrever'
import { ContainerBackground, BoxAnimation, TitleAnimation, BoxCard } from '../Background/BackgroundStyle'
import { NavHeroAirplane } from '../../NavHeroAirplane/NavHero'

function Text(){

    useEffect(() =>{
        const title = document.getElementById('title-animation')
        title.style.opacity = 1
        title.style.textShadow = '2px 2px 5px #000'
        maquinaEscrever(title)

        setTimeout(() =>{
            const boxCard = document.getElementById('boxcard')
            boxCard.style.display = 'flex'
        }, 2000)
    })


    return(
        <ContainerBackground>
            <NavHeroAirplane />
            <BoxAnimation>
                <TitleAnimation id='title-animation'>Select the Text Animation</TitleAnimation>
                <BoxCard id='boxcard'>
                    <CardAnimations
                        cardAnimation = 'cardUm'
                        to ='/typewriter'
                        nomeAnimation = 'Typewriter'
                    />
                     <CardAnimations
                        cardAnimation = 'cardDois'
                        to =''
                        nomeAnimation = 'TextReveal'
                    />
                     <CardAnimations
                        cardAnimation = 'cardTres'
                        to =''
                        nomeAnimation = 'Neon'
                    />
                </BoxCard>
            </BoxAnimation>
        </ContainerBackground>
    )
}

export default Text;