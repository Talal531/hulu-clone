import { forwardRef } from "react";
import Image from "next/Image";

import { ThumbUpIcon } from "@heroicons/react/outline";

const MovieCard = forwardRef(({ movie }, ref) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const poster_path = movie.poster_path;
  const backdrop_path = movie.backdrop_path;

  const imagePath = backdrop_path || poster_path;

  const image_url =
    `${BASE_IMAGE_URL}${imagePath}` || `${BASE_IMAGE_URL}${poster_path}`;

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image layout="responsive" src={image_url} height={1080} width={1920} />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>

        <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} - `}{" "}
          {movie.release_date && `${movie.release_date} - `}{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default MovieCard;
