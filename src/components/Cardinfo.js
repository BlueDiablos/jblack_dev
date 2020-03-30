import React from 'react';
import { useSpring, animated} from 'react-spring';
import './Card.css';
function CardInfo(props){

    const style = useSpring({opacity: 1, from : {opacity: 0}});
    return(
        <animated.div className="j-card-info" style={style}>
            <p className="j-card-title">{props.title}</p>
            <p className="j-card-subtitle">{props.subtitle}</p>
            <a  href={props.link} target="_blank" rel="noopener noreferrer">View</a>

        </animated.div>
    )
}

export default CardInfo;