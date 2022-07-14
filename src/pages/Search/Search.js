// import React from "react";
// import { useSelector } from "react-redux";
// import MovieDetail from "~/components/MovieDetail/MovieDetail";
// import SearchMovies from "~/components/SearchMovies/SearchMovies";
import React from "react";
import { useSelector } from "react-redux";
import MovieDetail from "src/components/MovieDetail/MovieDetail";
import SearchMovies from "src/components/SearchMovies/SearchMovies";

const Search = () => {
    const { movieDetail } = useSelector((state) => state.infoMovies);
    return (
        <>
            <SearchMovies />
            <MovieDetail movie={movieDetail} activeModal={movieDetail ? true : false} />
        </>
    );
};

export default Search;
