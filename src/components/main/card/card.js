import React from "react";
import "../main-assets/style/card.css";



const Card = (props) => {
    const { card, handleClick } = props
    return (
        card.map((eachCard) =>
                <div key={eachCard.id} className="images-container">
                    <div className="item-container" onClick={handleClick}>
                        <img className="images" src={eachCard.src} alt="Japan" />
                        <p className="image-text">{eachCard.imageText}</p>
                    </div>
                </div>
        )
    )
}

export default Card;