import styled from 'styled-components'

export const ContainerWrapper = styled.div`
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #FBAB7E;
    background-image: linear-gradient(45deg, #F8B195, #F67280, #C06C84, #6C567B);
    background-size: 300%, 300%;
    animation: GradientAnimation 5s infinite ease-in-out;

    div {
        display: inline-block;
        margin-right: 50px;
    }

    #triangulo-para-esquerda {
        width: 0; 
        height: 0; 
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent; 
        z-index: 2;
        border-right:25px solid #F67280; 
        position: relative;
        top: -30px;
        right: -42px;
        transition: 0.8s;
        opacity: 0;
    }


    @keyframes GradientAnimation{
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

export const Title = styled.h1`
    color: #f55263;
    font-size: 40px;
    text-align: justify;
    text-shadow: 2px 2px #000;
    opacity: 0;
    margin-bottom: 1em;
    

    &:after{
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: Line .7s infinite;
    }

    @keyframes Line {
        0%,100%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
    }
`;


export const BoxTitleAndBtn = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 40%;
    height: 100%;
    background-color: transparent;
    border: 1px solid pink;
    border-radius: 30px;
    padding: 45px 25px; 
    gap: 2em;
    animation: BorderAnimation 2s  infinite;
    position: relative;
    right:40px;
    transition: 0.8s;
    opacity: 0;

    .btn-home{
        border: 1px solid pink;
        font-size: 20px;
        color: pink;
        margin-bottom: 1em;
        text-decoration: none;
        text-shadow: 1px 1px #000;
        background-color: transparent;
        box-shadow: 1px 1px 5px 1px pink;
        cursor: pointer;
        color: rgb(255, 255, 255);
        transition: .5s;
        display: none;
        animation: btnHome 4s ease-in-out;
    }

    .btn-home:hover{
        border-radius: 30px 10px 30px 10px ;
    }  

    .btn{
        text-decoration: none;
    }

    @keyframes btnHome{
        0%{
            width: 0%;
            height: 0%;
            padding: 0px;
            font-size: 0px;
            transform: rotateZ(2340deg);
        }

        50%{
            font-size: 1px;
        }
        100%{
            width: auto;
            height: auto;
            font-size: 20px;
            transform: rotateZ(0deg);
        }
    }
     @keyframes BorderAnimation {
        0%,100%{
            box-shadow: 1px 1px 10px 4px rgb(253, 146, 164);
        }
        50%{
            box-shadow: 1px 1px 50px 10px rgb(253, 146, 164);
        }
    }
`;

export const BoxBtnHome = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
`;

export const BoxAnimationRobbotAndButton = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;

    .robbot{
        position: relative;
        left: 75px;
        width: 258px;
        height: 258px;
        z-index: 1;
        animation: animationRobot 2s ease-in-out;
    }

    .btn-robbot{
        position: relative;
        background-color: transparent;
        border: 1px solid pink;
        box-shadow: 1px 1px 10px 4px pink;
        color: pink;
        text-shadow: 2px 2px #000;
        transition: .7s;
        top: -165px;
        left: -45px;
        opacity: 0;
        cursor: pointer;
    }

    .btn-rob-link{
        text-decoration: none;
    }

    .btn-robbot:hover{
        border-radius: 30px 10px 30px 10px;
    }

    .animation-btn-robbot{
        animation: animationBtnRobbot 3s ease-in-out;
}

    @keyframes animationRobot{
        0%{
            opacity: 0;
            transform: translate3d(-300px, -25px, -20px);
            width: 50px;
            height: 50px;
        }
        25%{
            opacity: 0.25;
            transform: translate3d(-75px, 25px, 20px);
        }
        50%{
            opacity: 0.5;
            transform: translate3d(-55px, -20px, -15px);
        }
        75%{
            opacity: 0.75;
            transform: translate3d(-35px, 10px, 5px);
        }
        100%{
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
            width: 258px;
            height: 258px;
        }
    }

    @keyframes animationBtnRobbot{
        0%{
            left: 100px;
        }
        100%{
            left: -45px;
        }
    }
`;
