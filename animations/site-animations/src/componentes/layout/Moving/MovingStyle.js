import styled from "styled-components";

export const ContainerReview = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BoxMoving = styled.div`
        background: linear-gradient(-45deg, #FF00F4, #FFFFFF, #80FFAC) no-repeat;
        background-size: 300% 300%;
        animation: GradientExperience 10s infinite ;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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

    @keyframes DeveloperColor {
        0%,100%{
            color: aqua;
        }
        50%{
            color: plum;
        }
    }
    
`;

export const Button = styled.button`
    padding: 20px 40px;
    width: 150px;
    text-decoration: none;
    box-shadow: 1px 1px 5px 1px #0008;
    border: 1px solid #000;
    transition: .5s;
    opacity: 1;
    text-shadow: 1px 1px #000;
    background-color: transparent;
    animation: DeveloperColor 10s infinite;
    cursor: pointer;

    
`;

export const Developer = styled.p`
    font-size: 82px;
    font-weight: 800;
    position: relative;
    transition: .5s;
    text-shadow: 2px 2px #000;
    top: -1em;
    animation: DeveloperColor 10s infinite;

`;
    export const BoxButton = styled.div`
        display: flex ;
        gap: 0em 2em;

    .left{
        border-radius: 130px 10px 130px 10px;
    }

    .left:hover{
        border-radius: 10px 130px 10px 130px;
    }

    .right{
        border-radius: 10px 130px 10px 130px;
    }

    .right:hover{
        border-radius: 130px 10px 130px 10px;
    }
`;
