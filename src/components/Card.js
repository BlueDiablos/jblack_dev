import React from 'react';
import './Card.css'
import CardInfo from './Cardinfo';
function Card(props) {

    return(
        <div className="d inline-block j-card" onClick={(e) => props.click(props.item)}>
            <img className="j-card-image" src={props.item.imageSrc} alt={props.item.imageSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link = {props.item.link} />}
        </div>
    )    
}

export default Card;