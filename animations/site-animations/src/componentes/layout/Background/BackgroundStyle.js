import styled from "styled-components";

export const ContainerBackground = styled.div`
    padding-top: 7.5em;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) no-repeat;
    background-size: 300% 300%;
    animation: GradientBackground 10s infinite;

    @keyframes GradientBackground{
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
    }
`;

export const BoxAnimation = styled.div`
    width: 100%;
`;

export const TitleAnimation = styled.h3`
    text-align: center;
    font-size: 82px;
    margin-bottom: 1em;
    color: aqua;
    opacity: 0;   
`;

export const BoxCard = styled.div`
    display: none;
    opacity: 1;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0em 8em;
    gap: 5em 3em;

    .cardUm{
        animation: CardAnimation 0.4s ease-in-out;
    }

    .cardDois{
        animation: CardAnimation .8s ease-in-out;
    }
    .cardTres{
        animation: CardAnimation 1.2s ease-in-out;
    }
    


    @keyframes CardAnimation{
          from{
              transform: translateY(-25px);
              opacity: 0;
          }
          to{
              transform: translateY(0px);
              opacity: 1;
          }
    }
`;