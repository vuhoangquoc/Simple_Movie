import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";

// https://api.themoviedb.org/3/movie/now_playing?api_key=3baa5adb9c648772e5f77b58bc88bc89

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <Fragment>
                <Banner></Banner>
                <HomePage></HomePage>
              </Fragment>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
