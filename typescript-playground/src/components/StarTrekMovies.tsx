import { useEffect, useState } from "react";
import type { Movie } from "../types/movies";
import StarTrekMovieCard from "./StarTrekMovieCard";

export default function StarTrekMovies() {
  const starTrekGetAllMoviesUrl = "http://stapi.co/api/v1/rest/movie/search";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleGetMovies = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(starTrekGetAllMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
      });
  };

  const handleClearMovies = () => {
    setMovies([]);
  };

  return (
    <>
      <section className="mt-3 flex flex-col items-center gap-2">
        <h2>Get a list for Star Trek movies</h2>
        <form className="flex justify-center gap-3" onSubmit={handleGetMovies}>
          <button
            className="rounded-md bg-emerald-500  px-4 py-2 font-semibold text-white transition hover:bg-emerald-600"
            type="submit"
          >
            Get list
          </button>
          <button
            className="rounded-md bg-emerald-500  px-4 py-2 font-semibold text-white transition hover:bg-emerald-600"
            type="button"
            onClick={handleClearMovies}
          >
            Clear list
          </button>
        </form>
      </section>
      {movies.length > 0 && (
        <section className="flex flex-col items-center gap-2">
          <h3>Star Trek Movies</h3>
          <ul className="flex flex-wrap justify-center gap-5">
            {movies.map((movie) => (
              <StarTrekMovieCard
                setFavorites={setFavorites}
                favorites={favorites}
                key={movie.uid}
                movie={movie}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
