/* eslint-disable array-callback-return */
import React, { useEffect } from "react"
import Image from "../Image/Image"
import { useViewPort } from "~/hooks"

import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getSearchMovies } from "~/services/moviesService"
import { setMovieDetailAct } from "~/redux/actions/getMoviesAction"
import classNames from "classnames/bind"
import styles from "./SearchMovies.module.scss"
const cx = classNames.bind(styles)

const SearchMovies = () => {
    const [windowSize] = useViewPort()
    const dispatch = useDispatch()
    const { moviesSearch } = useSelector((state) => state.infoMovies) // get global state in store

    // Get info of current URL
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    let keywords = searchParams.get("keywords")

    // use debounce support get api search
    // const debounced = useDebounce(keywords, 500);
    // console.log(debounced);

    useEffect(() => {
        if (keywords) dispatch(getSearchMovies(keywords))
    }, [dispatch, keywords])

    return (
        <div className={cx("search-pane")}>
            {moviesSearch && moviesSearch.length > 0 ? (
                <div
                    className={cx("search-content")}
                    style={{
                        gridTemplateColumns: `repeat(${
                            windowSize > "1200"
                                ? 5
                                : windowSize > "992"
                                ? 4
                                : windowSize > "768"
                                ? 3
                                : windowSize > "600"
                                ? 2
                                : 1
                        }, auto)`,
                    }}>
                    {moviesSearch.map((movie) => {
                        if (movie.backdrop_path !== null && movie.media_type !== "person") {
                            const imgUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                            return (
                                <div
                                    key={movie.id}
                                    className={cx("search-item")}
                                    onClick={() => dispatch(setMovieDetailAct(movie))}>
                                    <Image className={cx("search-img")} src={imgUrl} alt={movie.title || movie.name} />
                                    <span className={cx("search-title")}>{movie.title || movie.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            ) : (
                <div className={cx("search-notfound")}>
                    <h2>Your search for {`${keywords}`} did not have any matches.</h2>
                </div>
            )}
        </div>
    )
}

export default SearchMovies
