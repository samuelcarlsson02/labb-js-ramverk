'use client';
import { AddMovieForm } from "./components/AddMovieForm";
import { MovieApplication } from "./components/MovieApplication";
import { Movies } from "./components/Movies";
import { OrderByAlphaButton } from "./components/OrderByAlphaButton";
import { OrderByGradeButton } from "./components/OrderByGradeButton";
import { useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  }

  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }

  const sortByAlpha = () => {
    setMovies(prevMovies => [...prevMovies].sort((a, b) =>
      a.title.localeCompare(b.title)
    ));
  }

  const sortByGrade = () => {
    setMovies(prevMovies => [...prevMovies].sort((a, b) =>
      b.grade - a.grade
    ));
  }

  return (
    <MovieApplication>
      <AddMovieForm onAddMovie={addMovie} />
      <Movies movies={movies} onDeleteMovie={deleteMovie} />
      <div className="flex m-4 space-x-4">
        <OrderByAlphaButton onClick={sortByAlpha} />
        <OrderByGradeButton onClick={sortByGrade} />
      </div>
    </MovieApplication>
  );
}
