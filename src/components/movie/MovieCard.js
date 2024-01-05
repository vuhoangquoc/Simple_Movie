import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import LoadingSkeleton from "components/loading/LoadingSkeleton";

const MovieCard = ({ data }) => {
  const { title, vote_average, release_date, poster_path, id } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={tmdbAPI.image500(poster_path)}
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
      <Button bgColor="secondary" onClick={() => navigate(`/movies/${id}`)}>
        Watch now
      </Button>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-lg font-bold text-white">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
      </div>
      <LoadingSkeleton
        width="100%"
        height="45px"
        radius="6px"
      ></LoadingSkeleton>
    </div>
  );
};

export default MovieCard;
