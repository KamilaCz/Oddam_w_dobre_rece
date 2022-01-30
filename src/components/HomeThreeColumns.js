import React from "react";
import Columns_background from "../assets/3-Columns-Background.png"


export default function HomeThreeColumns() {
    return (
        <section className="three__columns">
            <div className="column">
                <h1 className="number">10</h1>
                <h2 className="what">ODDANYCH WORKÓW</h2>
                <p className="col__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="column">
                <h1 className="number">5</h1>
                <h2 className="what">WSPARTYCH ORGANIZACJI</h2>
                <p className="col__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="column">
                <h1 className="number">7</h1>
                <h2 className="what">ZORGANIZOWANY ZBIÓREK</h2>
                <p className="col__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    );
}