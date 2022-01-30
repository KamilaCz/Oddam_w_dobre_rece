import React from "react";
import Decoration from "../assets/Decoration.svg";


export default function HomeSimpleSteps() {
    return (
        <section className="steps" id="ocochodzi">
            <div className="steps__title">
                <h1 className="steps__title__text">Wystarczą 4 proste kroki</h1>
                <img
                    className="home__deco"
                    src={Decoration}
                    alt=" "
                />
            </div>
            <div className="steps__steps"></div>
            <div className="steps__button"></div>
        </section>
    );
}