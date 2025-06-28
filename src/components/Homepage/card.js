import React from 'react';
import "../../card.css"
import { GiSpellBook } from "react-icons/gi";

const Card = () => {
  return (
    <>
      <div className=" card e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
        <GiSpellBook style={{ fontSize: "100px" }}/>
         <br />  
          Education department
          <br />
          <div className="name">MikeAndrewDesigner</div>
        </div>
      </div>
    </>
  );
}

  
export default Card;
