import { useState } from "react";

export default function MovieForm({ addMovie }) {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addMovie(movie);
    setMovie({ title: "", year: "", genre: "", rating: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        required
      />
      <input
        placeholder="Year"
        value={movie.year}
        onChange={(e) => setMovie({ ...movie, year: e.target.value })}
        required
      />
      <input
        placeholder="Genre"
        value={movie.genre}
        onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        required
      />
      <input
        placeholder="Rating"
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        required
      />
      <button>Add Movie</button>
    </form>
  );
}
