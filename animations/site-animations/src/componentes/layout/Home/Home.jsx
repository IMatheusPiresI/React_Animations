import React, { useEffect } from "react";
import HomeButton from "../../HomeButton/HomeButton.jsx";
import { ContainerWrapper, Title, BoxTitleAndBtn, BoxBtnHome, BoxAnimationRobbotAndButton } from "./HomeStyle.js";
import robbot from '../../../Images/robbot.png'
import { maquinaEscrever } from "./maquinaEscrever.js";


function Home(){

    useEffect(() =>{      
               
              const titulo1 = document.querySelector('#title-en-us')
              /* Função de delay para executar a função */
              setTimeout(() => {
                  maquinaEscrever(titulo1);
              }, 3000);    
              
              /* Função para aparecer o botão após 6segundos */
              const button = document.getElementById('button');
                  function viewButton(){
                      setTimeout(() => {
                      button.style.display = 'initial'
                      }, 8000);
                  }
        
                  viewButton()
        
                  /* Função para trocar o texto após click no botão */
                  function TrocaTexto(texto){
                  button.addEventListener('click', ()=>{
                      texto.innerHTML = 'Wrong, the correct button is sticking out of my ear!'
                      maquinaEscrever(texto)
                      button.disabled = true
                      const btnEye = document.getElementById('move-btn')
        
                      /*Animação do botão saindo do ouvido*/
                      setTimeout(() => {
                      btnEye.style.opacity = 1
                      btnEye.classList.add('animation-btn-robbot')
                      }, 5500);
        
                      /*Animação do botão (let´s go) trocando texto*/
                      setTimeout(() => {
                      button.innerHTML = "I'm sorry :)"
                      maquinaEscrever(button)
                      }, 3700);
                  })
                  }
              TrocaTexto(titulo1)
        
                  /* Animação delay bloco titulo e seta */
        
                  const borda = document.getElementById('border-title')
                  const seta = document.getElementById('triangulo-para-esquerda')
                  function esperaBordaeSeta(borda, seta){
                  setTimeout(() =>{
                      borda.style.opacity = 1
                      seta.style.opacity = 1
                  }, 2200)
                  }
                  esperaBordaeSeta(borda, seta)
        }
    )
    
    return(
        <ContainerWrapper>
            <BoxAnimationRobbotAndButton>
                <img className="robbot" src={robbot} alt="Robô" />
                <p><HomeButton name = 'This is correct!' className='btn-robbot' to='/experience' id='move-btn' classNameLink ='btn-rob-link'/></p>
            </BoxAnimationRobbotAndButton>
                <div id="triangulo-para-esquerda"></div>
            <BoxTitleAndBtn id="border-title">
                <Title id="title-en-us">Hello, welcome! You are entering my training on animations created with JavaSript and CSS.</Title>
                <BoxBtnHome>
                    <HomeButton id='button' to='' name = "Let's go" className='btn-home' classNameLink ='btn'/>
                </BoxBtnHome>
            </BoxTitleAndBtn>
        </ContainerWrapper>
        
    )
}

export default Home;