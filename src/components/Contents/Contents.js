import { useEffect } from "react"
import { FaArrowAltCircleUp } from "react-icons/fa"
import MoviesRow from "../MoviesRow/MoviesRow"
import * as moviesService from "../../services/moviesService"
import { useDispatch, useSelector } from "react-redux"
import { animateScroll as scroll } from "react-scroll"
import { useScrollY } from "../../hooks"
import MovieDetail from "../MovieDetail/MovieDetail"

import classNames from "classnames/bind"
import styles from "./Contents.module.scss"

const cx = classNames.bind(styles)

const Contents = () => {
    const scrollY = useScrollY()

    const dispatch = useDispatch()
    const { originals, trending, toprated, action, comedy, horror, romance, documentaries, movieDetail } = useSelector(
        (state) => state.infoMovies
    )
    useEffect(() => {
        dispatch(moviesService.getOriginals())
        dispatch(moviesService.getTrending())
        dispatch(moviesService.getTopRated())
        dispatch(moviesService.getAction())
        dispatch(moviesService.getComedy())
        dispatch(moviesService.getHorror())
        dispatch(moviesService.getRomance())
        dispatch(moviesService.getDocumentaries())
    }, [dispatch])

    return (
        <>
            <MoviesRow movies={originals} title="Netflix Originals" isPoster idScroll="originals" />
            <MoviesRow movies={trending} title="Trending Movies" idScroll="trending" />
            <MoviesRow movies={toprated} title="Top Rated Movies" idScroll="toprated" />
            <MoviesRow movies={action} title="Action Movies" idScroll="action" />
            <MoviesRow movies={comedy} title="Comedy Movies" idScroll="comedy" />
            <MoviesRow movies={horror} title="Horror Movies" idScroll="horror" />
            <MoviesRow movies={romance} title="Romance Movies" idScroll="romance" />
            <MoviesRow movies={documentaries} title="Documentaries Movies" idScroll="documentaries" />

            <MovieDetail detail={movieDetail} activeModal={movieDetail ? true : false} />

            <button
                className={cx("scrollUp-btn")}
                onClick={() => {
                    scroll.scrollToTop()
                }}
                style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}>
                <FaArrowAltCircleUp />
            </button>
        </>
    )
}

export default Contents
