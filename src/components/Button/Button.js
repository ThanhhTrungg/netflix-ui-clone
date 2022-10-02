import React from "react"
import classNames from "classnames/bind"
import styles from "./Button.module.scss"
const cx = classNames.bind(styles)

const Buttons = ({ children, swiperPrev, swiperNext, className, isOpacity, isPoster, onClick }) => {
    const classes = cx("more-btn", { swiperPrev, swiperNext, [className]: className, isOpacity, isPoster })

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Buttons
