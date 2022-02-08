import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoxModal = styled.div`
    background: linear-gradient(-45deg,#000,#fff, #000) no-repeat;
    background-size: 200% 200%;
    opacity: 0;
    transition: .5s ease-in-out;
    color:#000;
    width: 60%;
    min-height: 60vh;
    padding: 3em;
    border-radius: 20px;
    animation: BoxModal .5s ease-in-out, BackgroundModal 10s infinite;

    @keyframes BackgroundModal{
        0%,100%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
    }


    @keyframes BoxModal{
        from{
            transform: translateY(-50px);
        }
        to{
            transform: translateY(0px);
        }
    }
`;

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    outline:none;
    width: 32px;
    height: 32px;
    right: calc(-100%);
    top: -30px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    justify-content:center;

    &:before,
    &:after{
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
    }

    &:before{
        transform: rotate(45deg);
    }

    &:after{
        transform: rotate(-45deg);
    }
`;

export const CodeTitle = styled.div`
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    color: #000;
`;  

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const BoxCode = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height:100%;
    margin-top: 3em;
    margin-bottom: 3em;
    gap: 10px;
`;

export const Box = styled.div`
    width: 300px;
    height: 200px;
    border: 2px solid #000;
    overflow: scroll;
    
    .tag{
        font-weight: 700;
        color: #FF4500;
    }

    .text{
        word-break: break-all;
    }

    
`;

export const CodeHTML = styled.p`
    color: #000;
    white-space: nowrap;
`;

export const CodeCSS = styled.p`
    color: aqua;
    text-shadow: 1px 1px #000;
    white-space: nowrap;

`;

export const CodeJS = styled.p`
    white-space: nowrap;
`;

export const TecTitle = styled.h4`
    text-align:center;
    font-size: 23px;
    margin-bottom:8px;
    margin-top:8px;
`;