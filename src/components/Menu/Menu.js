import React from "react";
import MenuItem from "./MenuItem";
import { SiNetflix } from "react-icons/si";
import {FaStar, FaHotjar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll } from "react-icons/gi";

import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: "Originals",
        icon: <SiNetflix />,
        to: "originals",
    },
    {
        title: "Trending",
        icon: <FaHotjar />,
        to: "trending",
    },
    {
        title: "Top rated",
        icon: <FaStar />,
        to: "toprated",
    },
    {
        title: "Actions Movies",
        icon: <GiNinjaHeroicStance />,
        to: "action",
    },
    {
        title: "Comedy Movies",
        icon: <MdTheaterComedy />,
        to: "comedy",
    },
    {
        title: "Horror Movies",
        icon: <GiGhost />,
        to: "horror",
    },
    {
        title: "Romance Movies",
        icon: <GiRomanToga />,
        to: "romance",
    },
    {
        title: "Documentaries",
        icon: <GiBandageRoll />,
        to: "documentaries",
    },
];

const Menu = () => {
    return (
        <div className={cx("menu-pane")}>
            {MENU_ITEMS.map((menu, index) => (
                <MenuItem key={index} icon={menu.icon} title={menu.title} to={menu.to}/>
            ))}
        </div>
    );
};

export default Menu;
