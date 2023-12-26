import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=3baa5adb9c648772e5f77b58bc88bc89

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=3baa5adb9c648772e5f77b58bc88bc89

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=3baa5adb9c648772e5f77b58bc88bc89`,
    fetcher
  );
  console.log(
    "🚀 ~ file: MovieDetailsPage.js:11 ~ MovieDetailsPage ~ data:",
    data
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-center text-white ">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span
              className="px-4 py-2 border rounded border-primary text-primary"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3baa5adb9c648772e5f77b58bc88bc89`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="mb-10 text-2xl text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=3baa5adb9c648772e5f77b58bc88bc89`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      {results.slice(0, 1).map((item) => (
        <div key={item.id} className="w-full aspect-video">
          <iframe
            width="1276"
            height="718"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="object-fill w-full h-full"
          ></iframe>
        </div>
      ))}
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=3baa5adb9c648772e5f77b58bc88bc89`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
      <div className="movie-list">
        <div className="movie-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {results.length > 0 &&
              results.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard data={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
