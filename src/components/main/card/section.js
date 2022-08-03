import React, { useState } from "react";
import Header from "../../header/header";
import uniqid from "uniqid";
import Card from "./card";
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
const Section = () => {

    let city = [{
        src: japan,
        id: uniqid(),
        imageText: "Japan City by Jase-bloor"

    }, {
        src: dubai,
        id: uniqid(),
        imageText: "Dubai City by Daniel-Zacatenco"
    }, {
        src: newYork,
        id: uniqid(),
        imageText: "NewYork City by Denys Nevozhai"
    }, {
        src: sweden,
        id: uniqid(),
        imageText: "Sweden City by Micael Widell"
    }, {
        src: bolivia,
        id: uniqid(),
        imageText: "Bolivia City by Geziel Esteban"
    }, {
        src: kansas,
        id: uniqid(),
        imageText: "Kansas City by Dylam Freedom"
    }, {
        src: russia,
        id: uniqid(),
        imageText: "Russia City by A-L"
    }, {
        src: southbank,
        id: uniqid(),
        imageText: "southBank City by Marcus Clark"
    }, {
        src: london,
        id: uniqid(),
        imageText: "London City by Christopher Burns"
    }];

    const [card, setCard] = useState(city)
    const [score, setScore] = useState(0);

    const handleClick = () => {
        setScore(score + 1);
    }


    return (
        <div>
            <div className="header">
                <Header score={score} />
            </div>
            <div className="game-intro">
                <h3>Get points by Clicking on an image but don't click on any more than Once!</h3>
            </div>
            <div className="main">
                <Card card={card} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Section;