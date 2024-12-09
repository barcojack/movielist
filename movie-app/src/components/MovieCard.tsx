import React from "react";
import Swal from "sweetalert2";
import { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Ruta dinámica para importar la imagen basada en el título
  const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

  const showDetails = () => {
    Swal.fire({
      title: movie.title,
      text: `Genre: ${movie.genre}`,
      imageUrl: imageSrc,
      imageWidth: 300,
      imageAlt: `${movie.title} Poster`,
      confirmButtonText: "Cool!",
    });
  };

  return (
    <div className="movie-item" onClick={showDetails}>
      <img src={imageSrc} alt={movie.title} className="movie-img" />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
