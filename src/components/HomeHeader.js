import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import React from "react";
import homeImg from "../assets/Home-Hero-Image.jpg"
import Button from "./elements/Button";
import Decoration from "../assets/Decoration.svg";


export default function HomeHeader() {
    return (
        <>
            <section className="home__header">
                <img
                className="home__image"
                src={homeImg}
                />
                <div className="home__right__side">
                    <div className="navs">
                        <nav className="navs__login">
                                <Link className="home__log__button" to="/zaloguj">Zaloguj</Link>
                                <Link className="home__log__button" to="/zalozkonto">Załóż konto</Link>
                        </nav>
                        <nav className="navs__menu">
                            <Scroll smooth to="start" className="navs__menu__item">Start</Scroll>
                            <Scroll smooth to="ocochodzi" className="navs__menu__item">O co chodzi?</Scroll>
                            <Scroll smooth to="onas" className="navs__menu__item">O nas</Scroll>
                            <Scroll smooth to="fundacjaiorganizacje" className="navs__menu__item">Fundacja i organizacje</Scroll>
                            <Scroll smooth to="kontakt" className="navs__menu__item">Kontakt</Scroll>
                        </nav>
                    </div>
                    <div className="home__text">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        </div>
                    <img
                        className="home__deco"
                        src={Decoration}
                    />
                    <div className="home__buttons">
                        <Button><Link className="home__button" to="/oddaj-rzeczy">Oddaj rzeczy</Link></Button>
                        <Button><Link className to="/">Zorganizuj zbiórkę</Link></Button>
                    </div>
                    </div>
        </section>
        </>
    );
};