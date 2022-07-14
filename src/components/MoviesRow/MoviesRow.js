import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Image from "~/components/Image/Image";
import Buttons from "../Button/Button";
import classNames from "classnames/bind";
import styles from "./MoviesRow.module.scss";
import { useDispatch } from "react-redux";
import { setMovieDetailAct } from "~/redux/actions/getMoviesAction";

const cx = classNames.bind(styles);

const MoviesRow = ({ movies, title, isPoster, idScroll }) => {
    const dispatch = useDispatch();

    const handleOpenModal = (movie) => {
        console.log("Opened modal!");
        dispatch(setMovieDetailAct(movie));
    };

    return (
        <div className={cx("movies-contents")} id={idScroll}>
            <h1 className={cx("movies-header")}>{title}</h1>
            <Swiper
                className={cx("movies-slider")}
                modules={[Navigation, Pagination, Scrollbar, EffectCreative]}
                navigation={{ prevEl: ".swiper-btn-prev", nextEl: ".swiper-btn-next" }}
                spaceBetween={6}
                loop={true}
                breakpoints={{
                    992: {
                        slidesPerView: 6,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}>
                {movies &&
                    movies.length > 0 &&
                    // eslint-disable-next-line array-callback-return
                    movies.map((movie, idx) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            let imgUrl = isPoster
                                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
                            return (
                                <SwiperSlide key={idx}>
                                    <Link
                                        to="/"
                                        key={movie.id}
                                        className={cx("movies-item")}
                                        onClick={() => handleOpenModal(movie)}>
                                        <Image className={cx("movies-img")} src={imgUrl} alt={movie.title || movie.name} />
                                        <p className={cx("movies-name")}>{movie.title || movie.name}</p>
                                    </Link>
                                </SwiperSlide>
                            );
                        }
                    })}
                <Buttons swiperPrev isPoster={isPoster} className={cx("swiper-btn-prev")}>
                    <FiChevronLeft className={cx("movies-icon")} />
                </Buttons>
                <Buttons swiperNext isPoster={isPoster} className={cx("swiper-btn-next")}>
                    <FiChevronRight className={cx("movies-icon")} />
                </Buttons>
            </Swiper>
        </div>
    );
};

export default MoviesRow;
