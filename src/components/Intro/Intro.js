import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";

import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
const cx = classNames.bind(styles);

const Intro = () => {
    const [isMuted, setMuted] = useState(false);

    const truncate = (string, n) => {
        return string.length > n ? string.substr(0, n - 1) + "..." : string;
    };

    return (
        <div className={cx("intro-container")}>
            <ReactPlayer
                className={cx("video-intro")}
                width="100%"
                height="100%"
                playing={true}
                loop={true}
                volume={1}
                controls={false}
                muted={isMuted}
                url="https://vimeo.com/125188503"
            />
            <div className={cx("info-intro")}>
                <h1 className={cx("header-intro")}>Netflix Elite</h1>
                <div className={cx("buttons-intro")}>
                    <button className={cx("button-intro")}>Play</button>
                    <button className={cx("button-intro")}>My List</button>
                </div>
                <p className={cx("overview-intro")}>
                    {truncate(
                        `Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production Company: Awake film Agency:
                        Akqa`,
                        400
                    )}
                </p>
            </div>
            {isMuted ? (
                <VscMute className={cx("volume-intro")} onClick={() => setMuted((prevState) => !prevState)} />
            ) : (
                <VscUnmute className={cx("volume-intro")} onClick={() => setMuted((prevState) => !prevState)} />
            )}

            <div className={cx("fadeBottom")}></div>
        </div>
    );
};

export default Intro;
