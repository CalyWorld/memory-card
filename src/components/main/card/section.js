import React from "react";
import Header from "../../header/header";
import Card from "./card";
import "../main-assets/style/card.css";
const Section = () => {

    const handleClick = () =>{
       
    }


    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Card />
            </div>
        </div>
    )
}

export default Section;