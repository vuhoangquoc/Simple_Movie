import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePageLoadmore = lazy(() => import("./pages/MoviePageLoadmore"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

// https://api.themoviedb.org/3/movie/now_playing?api_key=3baa5adb9c648772e5f77b58bc88bc89

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
            <Route
              path="/movies"
              element={<MoviePageLoadmore></MoviePageLoadmore>}
            ></Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
          </Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
