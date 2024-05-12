import type { Movie } from "../types/movies";

export default function StarTrekMovieCard({ movie }: { movie: Movie }) {
  return (
    <section className="flex flex-col items-center gap-2 rounded-md bg-neutral-600 p-5 text-slate-100">
      <p className="text-xl font-bold text-emerald-300">{movie.title}</p>
      <p>Director: {movie.mainDirector.name}</p>
      <p>
        Stardate: {movie.stardateFrom} - {movie.stardateTo}
      </p>
      <p>
        Year: {movie.yearFrom} - {movie.yearTo}
      </p>
      <p>US Release Date: {movie.usReleaseDate}</p>
    </section>
  );
}
