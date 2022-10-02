import React from "react"

import classNames from "classnames/bind"
import styles from "./MovieDetail.module.scss"
import { setMovieDetailAct } from "~/redux/actions/getMoviesAction"
import { useDispatch } from "react-redux"
import moment from "moment"

const cx = classNames.bind(styles)

const MovieDetail = ({ detail, activeModal }) => {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        console.log("Closed modal!")
        dispatch(setMovieDetailAct(null))
    }

    const handleCloseBackdrop = (e) => {
        console.log("Stop Close Modal!")
        e.stopPropagation()
    }

    return (
        <div className={cx("movieDetail-modal", { activeModal })} onClick={handleCloseModal}>
            <div
                className={cx("movieDetail-backdrop")}
                style={
                    detail
                        ? {
                              backgroundImage: `url("https://image.tmdb.org/t/p/original${
                                  detail.backdrop_path || detail.poster_path
                              }")`,
                          }
                        : {}
                }
                onClick={handleCloseBackdrop}>
                <div className={cx("backdrop-container")}>
                    <div className={cx("backdrop-info")}>
                        <h1 className={cx("backdrop-title")}>{detail && (detail.title || detail.name)}</h1>
                        <p className={cx("backdrop-statistical")}>
                            <span className={cx("backdrop-rating")}>Rating: {detail && detail.vote_average * 10}%</span>
                            <span className={cx("backdrop-popularity")}>Popularity: {detail && detail.popularity}</span>
                        </p>
                        <p className={cx("backdrop-releaseDay")}>
                            Release date:{" "}
                            {detail &&
                                (moment(detail.release_date).format("DD/MM/YYYY") ||
                                    moment(detail.first_air_date).format("DD/MM/YYYY"))}
                        </p>
                        <p className={cx("backdrop-runtime")}>
                            Runtime: {detail && (detail.runtime || detail.episode_run_time)}
                        </p>
                        <p className={cx("backdrop-overview")}>{detail && detail.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
