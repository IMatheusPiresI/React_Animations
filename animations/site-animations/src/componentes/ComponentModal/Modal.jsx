import React, { useEffect } from "react";
import { Modal, BoxModal, CloseButton, CodeTitle, BoxText, BoxCode, Box, CodeHTML, CodeCSS, CodeJS, TecTitle } from "./ModalStyle";

const ModalWrapper = ({
    id = 'modal', onClose = () =>{}, title, html, cssTitle, css, javascriptTitle, javascript }) =>{
    const handleOutsideClick = (e) =>{
        if(e.target.id === id) onClose()
    }

    useEffect(()=>{
            const boxModal = document.querySelector('#boxmodal');
            boxModal.style.opacity = 1;
    })

    return(
        <Modal id={id} onClick={handleOutsideClick}>
            <BoxModal id="boxmodal">
                <CloseButton onClick={onClose}/>
                <BoxText>
                    <CodeTitle>{title}</CodeTitle>
                    <BoxCode>
                        <Box>
                            <TecTitle>HTML</TecTitle>
                            <CodeHTML>{html}</CodeHTML>
                        </Box>
                        <Box>
                            <TecTitle>CSS</TecTitle>
                            <CodeCSS>{css}</CodeCSS>
                        </Box>
                        <Box>
                            <TecTitle>JavaScript</TecTitle>
                            <CodeJS>{javascript}</CodeJS>
                        </Box>
                    </BoxCode>
                </BoxText>
                
            </BoxModal>
        </Modal>
        
    )
}

export default ModalWrapper;