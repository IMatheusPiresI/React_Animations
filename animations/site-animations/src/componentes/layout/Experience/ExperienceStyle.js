import styled from "styled-components";

export const ContainerExperience = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) no-repeat;
    background-size: 300% 300%;
    animation: GradientExperience 10s infinite ease;

    .heroairplane{
        position: absolute;
        width: 250px;
        height: 250px;
        animation: HeroAirplane 5s linear forwards;
    }

    @keyframes GradientExperience{
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


    @keyframes HeroAirplane {
        0%{
            transform: translate3d(-20vh, 0vh, 0px); 
        }

        10%{
            transform: translate3d(5vw, 1vh, 0px);
        }
       20%{
            transform: translate3d(15vw, 0vh, 0px)
       }
       30%{
            transform: translate3d(25vw, 1vh, 0px)
       }
       40%{
            transform: translate3d(35vw, 0vh, 0px)
       }
       50%{
            transform: translate3d(45vw, 1vh, 0px)
       }
       60%{
            transform: translate3d(50vw, 0vh, 0px)
       }
       70%{
            transform: translate3d(55vw, 0vh, 0px)
       }
       80%{
            transform: translate3d(60vw, 0vh, 0px) rotateZ(-45deg);
       }
       90%{ 
            transform: translate3d(65vw, -35vh, 0px) rotateZ(-45deg);
       }
       100%{
            transform: translate3d(0vw, -105vh, 0px) rotateZ(-45deg);
            display: none;
       }
    }

    .titleAnimation{
        animation: TextColor 10s infinite;
    }

    @keyframes TextColor{
        0%,100%{
            color: aqua;
        }
        50%{
            color: plum;
        }
    }
`;

export const BoxExperience = styled.div`
    width: 100%;
    height: 100%;
    padding: 5em;
    .shadowtitle{
        text-shadow: 2px 2px 5px #000;
    }

    .boxanimations{
        animation: Card .7s ease-in-out ;
        opacity: 1;
    }

    @keyframes Card{
        from{
            transform: translateY(-50px);
            opacity: 0;
        }
        to{
            transform: translateY(0px);
            opacity: 1;
        }
    }
`;

export const TitleExperience = styled.h2`
    text-align: center;
    font-size: 82px;
    margin-bottom: 1em;
    opacity: 0;   
    animation: TextColor 10s infinite;
`;

export const BoxAnimations = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    opacity: 0;
`;
