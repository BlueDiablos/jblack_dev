import React from "react";
import "./Card.css";
import CardInfo from "./Cardinfo";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" }
  });

  return (
    <animated.div
      style={style}
      className="d inline-block j-card"
      onClick={e => props.click(props.item)}
    >
      <img
        className="j-card-image"
        src={props.item.imageSrc}
        alt={props.item.imageSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          link={props.item.link}
        />
      )}
    </animated.div>
  );
}

export default Card;
