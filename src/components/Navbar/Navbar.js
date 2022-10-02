import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import images from "~/assets/images";
import { useScrollY } from "~/hooks";
import { useNavigate } from "react-router-dom";
import Image from "../Image/Image";

const cx = classNames.bind(styles);

const Navbar = () => {
    const scrollY = useScrollY();
    const navigate = useNavigate();

    const [keyWords, setKeyWords] = useState("");

    const handleChangInput = (e) => {
        let keywords = e.target.value;
        setKeyWords(keywords);
        keywords.length > 0 && (keywords.length || null)
            ? navigate(`/search?keywords=${keyWords.trim()}`)
            : navigate("/");
    };

    return (
        <div
            className={cx("nav-container")}
            style={
                scrollY < 50
                    ? { background: "transparent", transition: "all 0.5s ease" }
                    : { background: "var(--background)" }
            }>
            <div
                className={cx("logo")}
                onClick={() => {
                    navigate("/");
                    setKeyWords("");
                }}>
                <Image src={images.logo} alt="Netflix" />
            </div>

            <div className={cx("avatar")} onClick={() => navigate("/profile")}>
                <Image
                    src={"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}
                    alt="User Avatar"
                />
            </div>
            <div className={cx("nav-search")}>
                <MdSearch className={cx("icon-search")} />
                <input
                    onChange={handleChangInput}
                    value={keyWords}
                    type="text"
                    placeholder="Input title, genres, people"
                />
            </div>
        </div>
    );
};

export default Navbar;
