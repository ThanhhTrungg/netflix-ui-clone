import React from "react";
import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import { randomColor } from "~/utils";
import { Link } from "react-scroll";

const cx = classNames.bind(styles);

const MenuItem = ({ title, icon, to }) => {
    return (
        <Link
            className={cx("menu-child")}
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <span style={{ color: randomColor(1) }} className={cx("menu-icon")}>
                {icon}
            </span>
            <span className={cx("menu-title")}>{title}</span>
        </Link>
    );
};

export default MenuItem;
