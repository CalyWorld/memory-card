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
        imageText: "Japan City by Jase-bloor",
        clicked: false

    }, {
        src: dubai,
        id: uniqid(),
        imageText: "Dubai City by Daniel-Zacatenco",
        clicked: false
    }, {
        src: newYork,
        id: uniqid(),
        imageText: "NewYork City by Denys Nevozhai",
        clicked: false
    }, {
        src: sweden,
        id: uniqid(),
        imageText: "Sweden City by Micael Widell",
        clicked: false
    }, {
        src: bolivia,
        id: uniqid(),
        imageText: "Bolivia City by Geziel Esteban",
        clicked: false
    }, {
        src: kansas,
        id: uniqid(),
        imageText: "Kansas City by Dylam Freedom",
        clicked: false
    }, {
        src: russia,
        id: uniqid(),
        imageText: "Russia City by A-L",
        clicked: false
    }, {
        src: southbank,
        id: uniqid(),
        imageText: "southBank City by Marcus Clark",
        clicked: false
    }, {
        src: london,
        id: uniqid(),
        imageText: "London City by Christopher Burns",
        clicked: false
    }];

    const [card, setCardInfo] = useState(city);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleClick = (e) => {
        // e.preventDefault();
        const cardShuffled = shuffle(card)
        setCardInfo(cardShuffled);
        // handleScore(id)
    }

    // const handleScore = (id) =>{
    //     let element = card.filter((card)=> card.id === id);
    //     if(element && element.clicked === false){
    //         element.clicked = true;
    //         setCard({...card, clicked: false});
    //         handleIncrement();
    //     }else if(element && element.clicked === true){
    //         if(score > bestScore){
    //             setBestScore(score);
    //         }
    //         setScore(0);
    //         setCard({...card, clicked: true});
    //         card.forEach((card)=> card.clicked = false);
    //         console.log(card);
    //     }
    // }
    // const handleIncrement = () => {
    //     setScore(score + 1);
    // }

    const shuffle = (card) => {
        let resultArray = [];
        while (card.length > 0) {
            let randomIndex = Math.floor(Math.random() * card.length);
            let randomeElement = card[randomIndex];
            resultArray.push(randomeElement);
            card.splice(randomIndex, 1);
        }
        return resultArray;
    }

    return (
        <div>
            <div className="header">
                <Header score={score} bestScore={bestScore} />
            </div>
            <div className="game-intro">
                <h3>Get points by Clicking on an image but don't click on any more than Once!</h3>
            </div>
            <div className="main">
                <Card card={card} handleClick={handleClick} clicked={card.clicked} />
            </div>
        </div>
    )
}

export default Section;