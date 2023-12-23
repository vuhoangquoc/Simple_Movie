import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";

// https://api.themoviedb.org/3/movie/now_playing?api_key=3baa5adb9c648772e5f77b58bc88bc89

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
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
