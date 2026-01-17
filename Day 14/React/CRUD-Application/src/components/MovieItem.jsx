export default function MovieItem({
  movie,
  deleteMovie,
  toggleEdit,
  updateMovie,
}) {
  return (
    <li>
      {movie.editing ? (
        <>
          <input
            value={movie.title}
            onChange={(e) => updateMovie(movie.id, "title", e.target.value)}
          />
          <input
            value={movie.year}
            onChange={(e) => updateMovie(movie.id, "year", e.target.value)}
          />
          <button onClick={() => toggleEdit(movie.id)}>Save</button>
        </>
      ) : (
        <>
          <strong>{movie.title}</strong> ({movie.year}) |{movie.genre} | ⭐{" "}
          {movie.rating}
          <button onClick={() => toggleEdit(movie.id)}>Edit</button>
          <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
