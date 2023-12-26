import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
  const { title, vote_average, release_date, poster_path, id } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average.toFixed(1)}</span>
        </div>
      </div>
      <button
        className="w-full px-6 py-3 mt-auto font-medium text-white rounded-lg bg-primary"
        onClick={() => navigate(`/movies/${id}`)}
      >
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
