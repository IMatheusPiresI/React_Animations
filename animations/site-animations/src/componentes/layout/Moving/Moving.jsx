import React, { useState } from "react";
import { ContainerReview, BoxMoving, Button, Developer } from "./MovingStyle";
import ModalWrapper from "../../ComponentModal/Modal";
import { CodeHTML } from "../../ComponentModal/ModalStyle";

function Moving(){
    const [showModal, setShowModal] = useState(false);
    
    return(
        <ContainerReview>
            <BoxMoving>
                <Developer id='developer'>Create by Matheus Pires</Developer>
                <Button onClick={() =>setShowModal(true)}>View Code</Button>
                {showModal ? <ModalWrapper 
                title='Background Moving'
                html={
                    <div>
                        <p className = 'tag'>&lt;/div&gt;</p>
                        <p className = 'tag'>background: linear-gradient(-45deg, #FF00F4, #FFFFFF, #80FFAC) no-repeat;</p>

                    </div>}
                css= {
                    <p className="text">background: linear-gradient(-45deg, #FF00F4, #FFFFFF, #80FFAC) no-repeat; <br/>
                    background-size: 300% 300%; <br/>
                    animation: GradientExperience 10s infinite; <br/>
                    width: 100%; <br/>
                    min-height: 100vh; <br/>
                    display: flex; <br/>
                    flex-direction: column; <br/>
                    align-items: center; <br/>
                    justify-content: center;</p>
                }
                javascript={
                    <div>
                        <p className = 'tag'>&lt;div&gt;</p>
                        <p className = 'tag'>&lt;/div&gt;</p>
                    </div>
                }
                onClose={() => setShowModal(false)}/> : null}
            </BoxMoving>
        </ContainerReview>
    )
}

export default Moving;

