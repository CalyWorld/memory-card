import React from "react";
import '../header/header.css';
const Header = () => {
    return (
        <div className="header-container">
            <div className="title-container">
                <h1>Memory Game</h1>
            </div>
            <div className="score-container">
                <div className="score">
                    <h3>Score: 0</h3>
                </div>
                <div className="best-score">
                    <h3>Best score: 0</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;