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
`;

export const Button = styled.button`
    padding: 20px 40px;
    text-decoration: none;
    box-shadow: 2px 2px 10px 2px #0008;
    border: 1px solid #000;
    border-radius: 20px;

`;

export const Developer = styled.p`
    font-size: 82px;
    font-weight: 800;
    position: relative;
    transition: .5s;
    text-shadow: 2px 2px #000;
    top: -1em;
    animation: DeveloperColor 10s infinite;

    @keyframes DeveloperColor {
        0%,100%{
            color: aqua;
        }
        50%{
            color: plum;
        }
    }
`;