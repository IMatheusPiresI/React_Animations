import React from "react";
import { CardContainer, Card, TitleCard, BoxDescription, Description} from './CardStyle'
import { Link } from "react-router-dom";

export function CardLibrary(props){
    return(   
        <CardContainer>
            <Link to={props.to} className="link">
            <Card>
                <TitleCard className={props.titleClass}>{props.title}</TitleCard>
                <img className="image" src={props.src} alt="" width={150} height={150} />
                <BoxDescription>
                    <Description className={props.descriptionClass}>{props.description}</Description>
                </BoxDescription>
            </Card>
            </Link>
        </CardContainer>
    
        
    )
}
