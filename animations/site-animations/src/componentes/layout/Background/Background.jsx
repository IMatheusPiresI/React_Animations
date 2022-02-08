import React, { useEffect } from 'react'
import CardAnimations from '../../CardAnimations/CardAnimations'
import { maquinaEscrever } from '../Home/maquinaEscrever'
import { ContainerBackground, BoxAnimation, TitleAnimation, BoxCard } from './BackgroundStyle'

function Background(){

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
            <BoxAnimation>
                <TitleAnimation id='title-animation'>Select the Background Animation</TitleAnimation>
                <BoxCard id='boxcard'>
                    <CardAnimations
                        cardAnimation = 'cardUm'
                        to ='/moving'
                        nomeAnimation = 'Moving'
                    />
                     <CardAnimations
                        cardAnimation = 'cardDois'
                        to =''
                        nomeAnimation = 'Revealing'
                    />
                     <CardAnimations
                        cardAnimation = 'cardTres'
                        to =''
                        nomeAnimation = 'Alternate'
                    />
                </BoxCard>
            </BoxAnimation>
        </ContainerBackground>
        
    )
}

export default Background;