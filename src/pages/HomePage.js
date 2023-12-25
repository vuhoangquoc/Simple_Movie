import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="mb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Top Rated
        </h2>
        <MovieList type={"top_rated"}></MovieList>
      </section>
      <section className="mb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Top Trending
        </h2>
        <MovieList type={"popular"}></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
