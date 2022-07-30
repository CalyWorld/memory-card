import React from "react";
import japan from "../main-assets/images/jase-bloor.jpg";
import dubai from "../main-assets/images/daniel-zacatenco.jpg";
import newYork from "../main-assets/images/denys-nevozhai.jpg";
import sweden from "../main-assets/images/micael-widell.jpg";
import bolivia from "../main-assets/images/geziel-esteban.jpg";
import kansas from "../main-assets/images/dylan-freedom.jpg";
import russia from "../main-assets/images/a-l.jpg";
import southbank from "../main-assets/images/marcus-clark.jpg";
import london from "../main-assets/images/christopher-burns.jpg";
import "../main-assets/style/card.css";



const Card = () => {

    return (
        <div>
            <div className="images-container">
                <div className="item-container">
                    <img className="images" src={japan} alt="Japan" />
                    <p className="image-text">Japan City by Jase-bloor</p>
                </div>
                <div className="item-container">
                    <img className="images" src={dubai} alt="Dubai" />
                    <p className="image-text">Dubai City by Daniel-Zacatenco</p>
                </div>
                <div className="item-container">
                    <img className="images" src={newYork} alt="NewYork" />
                    <p className="image-text">NewYork City by Denys Nevozhai </p>
                </div>
                <div className="item-container">
                    <img className="images" src={sweden} alt="Sweden" />
                    <p className="image-text">Sweden City by Micael Widell</p>
                </div>
                <div className="item-container">
                    <img className="images" src={bolivia} alt="Bolivia" />
                    <p className="image-text">Bolivia City by Geziel Esteban</p>
                </div>
                <div className="item-container">
                    <img className="images" src={kansas} alt="Kansas" />
                    <p className="image-text">Kansas City by Dylan Freedom</p>
                </div>
                <div className="item-container">
                    <img className="images" src={russia} alt="Russia" />
                    <p className="image-text">Russai City by A-L</p>
                </div>
                <div className="item-container">
                    <img className="images" src={southbank} alt="SouthBank" />
                    <p className="image-text">SouthBank City by Marcus Clark</p>
                </div>
                <div className="item-container">
                    <img className="images" src={london} alt="London" />
                    <p className="image-text">London City by Christopher Burns</p>
                </div>
            </div>
        </div>
    )
}

export default Card;