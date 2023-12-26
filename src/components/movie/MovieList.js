import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config";
import useSWR from "swr";

const MovieList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=3baa5adb9c648772e5f77b58bc88bc89`,
    fetcher
  );
  // useEffect(() => {
  //   if (data?.results) {
  //     setMovies(data.results);
  //   }
  // }, [data]);
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard data={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
