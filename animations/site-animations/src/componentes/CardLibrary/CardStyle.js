import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    text-decoration: none;

    .link{
        text-decoration: none;
    }

    .image{
        margin-bottom: 20px;
    }
`;

export const Card = styled.div`
    border-radius: 5px;
    box-shadow: 7px 7px 13px 4px rgb(50, 50, 50, 0.40);
    border: 1px solid pink;
    border-radius: 115px 0px 115px 0px;
    padding: 30px;
    margin: 20px;
    width: 300px;
    transition: all 0.3s ease-out;
    text-align: center;

    &:hover{
        transform: translateY(-15px);
        cursor: pointer;
    }
`;

export const TitleCard = styled.h3`
    font-size: 30px;
    text-shadow: 1px 1px 10px #000;
    margin-bottom: 20px;
`;

export const BoxDescription = styled.div`
    text-align: justify ;
`;

export const Description = styled.p`
    color: white;
    font-size: 18px;
    margin-bottom: 15px;
    text-shadow: 2px 2px #000;
`;