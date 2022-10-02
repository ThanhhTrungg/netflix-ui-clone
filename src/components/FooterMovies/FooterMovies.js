import React from "react"
import classNames from "classnames/bind"
import styles from "./FooterMovies.module.scss"

const cx = classNames.bind(styles)

const FooterMovies = () => {
    return (
        <div className={cx("footerMovies-container")}>
            <h4 className={cx("footerMovies-title")}>Copyright &copy; 2022</h4>
            <div className={cx("footerMovies-contact")}>
                <p className={cx("contact-heart")}>
                    Made with <span style={{ color: "red" }}>&#10084;</span> - Thanh Trung Nguyen
                </p>
                <p className={cx("contact-email")}>thanhtrungpl95@gmail.com</p>
            </div>
        </div>
    )
}

export default FooterMovies
