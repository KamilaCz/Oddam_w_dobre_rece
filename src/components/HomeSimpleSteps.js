import React from "react";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";
import Button from "./elements/Button";


export default function HomeSimpleSteps() {
    return (
        <section className="steps" id="ocochodzi">
            <div className="steps__title">
                <h1 className="steps__title__text">Wystarczą 4 proste kroki</h1>
                <img
                    className="steps__deco"
                    src={Decoration}
                    alt=" "
                />
            </div>
            <div className="steps__steps">
                <div className="steps__step">
                    <img className="step__icon"
                    src={Icon1}
                    alt=" "/>
                    <h2 className="step__what">Wybierz rzeczy</h2>
                    <p className="step__info">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__step">
                    <img className="step__icon"
                    src={Icon2}
                    alt=" "/>
                    <h2 className="step__what">Spakuj je</h2>
                    <p className="step__info">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__step">
                    <img className="step__icon"
                    src={Icon3}
                    alt=" "/>
                    <h2 className="step__what">Zdecyduj komu chcesz pomóc</h2>
                    <p className="step__info">wybierz zaufane miejsce</p>
                </div>
                <div className="steps__step">
                    <img className="step__icon"
                    src={Icon4}
                    alt=" "/>
                    <h2 className="step__what">Zamów kuriera</h2>
                    <p className="step__info">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
           <Button children={<Link className="steps__button" to="/oddaj-rzeczy">ODDAJ RZECZY</Link>}/>

        </section>
    );
}