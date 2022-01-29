import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp"
import HomeBackgroundOverlay from "./HomeBackgroundOverlay";

export default function Home() {
    return (
            <main style={{maxWidth: 1500, padding: "1rem 0" }}>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeBackgroundOverlay />
        </main>
    );
}