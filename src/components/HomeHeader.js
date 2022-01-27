import React from "react";
import {Link} from "react-router-dom";

export default function HomeHeader() {
    return (
        <><div style={{height: "963px"}}>
            <div>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}
                >
                    <Link to="/zaloguj">Zaloguj</Link> |{" "}
                    <Link to="/zalozkonto">Załóż konto</Link>

                </nav>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}
                >
                    <Link to="/start">Start</Link> |{" "}
                    <Link to="/ocochodzi">O co chodzi?</Link> |{" "}
                    <Link to="/onas">O nas</Link> |{" "}
                    <Link to="/fundacjaiorganizacje">Fundacja i organizacje</Link> |{" "}
                    <Link to="/kontakt">Kontakt</Link>
                </nav>
            </div>
            <div>
                <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div>
                    <button>
                        <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
                    </button>
                    <button>
                        <Link to="/">Zorganizuj zbiórkę</Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};