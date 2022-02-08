import styled from "styled-components";

export const ContainerCardAnimation = styled.div`
    display: flex;
    word-wrap: break-word;
    text-decoration: none;

    .link-animation{
        text-decoration: none;
    }
`;

export const CardAnimation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    padding: 20px 0px;
    border-radius: 115px 0px 115px 0px;
    border: 1px solid blue;
    background-color: transparent;
    transition: 0.7s;

    &:hover{
        transform: translateY(-20px);
    }

    

    .svg-card-animation{
        font-size: 2em;
        margin-right: 5px;
        fill: aqua;
    }
`;

export const NomeAnimation = styled.h3`
    color: #fff;
`;