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

    const [cardInfo, setCardInfo] = useState(city);
    const [score, setScore] = useState(0);
    let [bestScore, setBestScore] = useState(0);


    const handleClick = (id) => {
        let cardShuffled = shuffleCard(cardInfo)
        setCardInfo(cardShuffled);
        handleScore(cardShuffled, id)
    }

    const handleScore = (cardShuffled, id) => {
        let element = cardShuffled.filter((card) => card.id === id);
        console.log(element);
        element.forEach((card) => {
            if (card.clicked === false) {
                card.clicked = true;
                handleIncrement();
            } else if (card.clicked === true) {
                if (score > bestScore) {
                    bestScore = score;
                    setBestScore(bestScore);
                    console.log(card);
                }
                setScore(0);
                handleReset(cardShuffled);
            }
        });
    }
    const handleReset = (cardShuffled) => {
        cardShuffled.forEach((card) => {
            card.clicked = false;
        });
    }
    const handleIncrement = () => {
        setScore(score + 1);
    }

    const shuffleCard = (card) => {
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
                <h4>Get points by Clicking on an image but don't click on any more than Once!</h4>
            </div>
            <div className="main">
                <Card card={cardInfo} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Section;