import type { MovieCardProps } from "../../types/movies";

export default function StarTrekMovieCard({
  movie,
  setFavorites,
  favorites,
}: MovieCardProps) {
  const handleSetFavorite = () => {
    setFavorites((prevFavorites) => [...prevFavorites, movie.uid]);
  };

  const handleDeleteFavorite = () => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite !== movie.uid),
    );
  };

  const isFavorite = favorites.some((favorite) => favorite === movie.uid);

  return (
    <li
      className={`${isFavorite ? "bg-neutral-400" : "bg-neutral-600"} flex flex-col items-center gap-2 rounded-md  p-5 text-slate-100`}
    >
      <p className="text-xl font-bold text-emerald-300">{movie.title}</p>
      <p>Director: {movie.mainDirector.name}</p>
      <p>
        Stardate: {movie.stardateFrom} - {movie.stardateTo}
      </p>
      <p>
        Year: {movie.yearFrom} - {movie.yearTo}
      </p>
      <p>US Release Date: {movie.usReleaseDate}</p>
      <div className="flex gap-5">
        <button
          className="rounded-md bg-orange-500  px-4 py-2 font-semibold text-white transition hover:bg-orange-600 active:scale-90"
          onClick={isFavorite ? handleDeleteFavorite : handleSetFavorite}
        >
          {isFavorite ? "Remove from" : "Add to"} favorites
        </button>
      </div>
    </li>
  );
}
