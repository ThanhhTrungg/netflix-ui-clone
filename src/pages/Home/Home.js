import React from "react";
import Contents from "src/components/Contents/Contents";
import Intro from "src/components/Intro/Intro";
import Menu from "src/components/Menu/Menu";

const Home = () => {
    return (
        <>
            <Intro />
            <Menu />
            <Contents />
        </>
    );
};

export default Home;
