import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";

// https://api.themoviedb.org/3/movie/now_playing?api_key=3baa5adb9c648772e5f77b58bc88bc89

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container pb-10">
        <div className="relative w-full h-full rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://file.hstatic.net/200000722513/article/marvels-avengers-review_31815da75846440bbcc56408998c1678.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full text-white bottom-5 left-5">
            <h2 className="mb-5 text-3xl font-bold">Avengers: Endgame</h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
              Watch Now
            </button>
          </div>
        </div>
      </section>
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
}

export default App;
