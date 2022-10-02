import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { VscMute, VscUnmute } from "react-icons/vsc"
import * as moviesService from "~/services/moviesService"

import classNames from "classnames/bind"
import styles from "./Intro.module.scss"
import * as httpRequest from "~/utils/httpRequest"

const cx = classNames.bind(styles)

const Intro = () => {
    const [isMuted, setMuted] = useState(false)
    const [movie, setMovie] = useState([])

    const truncate = (string, n) => (string.length > n ? string.substr(0, n - 1) + "..." : string)

    useEffect(() => {
        const fetchApi = async () => {
            const response = await httpRequest.getAPI(moviesService.requests.originals)
            setMovie(response.results[Math.floor(Math.random() * response.results.length - 1)])
            return response
        }
        fetchApi()
    }, [])
    console.log(movie)

    return (
        <div className={cx("intro-container")}>
            {/* <ReactPlayer
                className={cx("video-intro")}
                width="100%"
                height="100%"
                playing={true}
                loop={true}
                volume={1}
                controls={false}
                muted={isMuted}
                url="https://vimeo.com/125188503"
            /> */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                    backgroundSize: "cover",
                    backgroundOrigin: "center center",
                    backgroundRepeat: "no-repeat",
                }}
                className={cx("slideImg-intro")}
            />
            <div className={cx("info-intro")}>
                <h1 className={cx("header-intro")}>{movie.title || movie.name || movie.originals}</h1>
                <div className={cx("buttons-intro")}>
                    <button className={cx("button-intro")}>Play</button>
                    <button className={cx("button-intro")}>My List</button>
                </div>
                <p className={cx("overview-intro")}>{truncate(movie.overview || "", 400)}</p>
            </div>
            {isMuted ? (
                <VscMute className={cx("volume-intro")} onClick={() => setMuted((prevState) => !prevState)} />
            ) : (
                <VscUnmute className={cx("volume-intro")} onClick={() => setMuted((prevState) => !prevState)} />
            )}

            <div className={cx("fadeBottom")}></div>
        </div>
    )
}

export default Intro
