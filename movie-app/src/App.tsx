import React, { useState } from 'react';
import "./App.css";
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "madmax",
      genre: "Ciencia Ficción",
      image: "max.webp",
    },
    {
      id: 2,
      title: "extincion",
      genre: "documental",
      image: "extincion.webp",
    },
    {
      id: 3,
      title: "truma",
      genre: "ciencia ficción",
      image: "truma.webp",
    },
  ]);

  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
