import MovieItem from "./MovieItem";

export default function MovieList({
  movies,
  deleteMovie,
  toggleEdit,
  updateMovie,
}) {
  if (movies.length === 0) return <p>No movies found</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
          toggleEdit={toggleEdit}
          updateMovie={updateMovie}
        />
      ))}
    </ul>
  );
}
