import { useEffect, useState } from "react";
import MovieForm from "./components/MovieForm";
import Controls from "./components/Controls";
import MovieList from "./components/MovieList";

const PER_PAGE = 10;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error();
        const data = await res.json();

        const adapted = data.slice(0, 30).map((p) => ({
          id: p.id,
          title: p.title,
          year: 2000 + (p.id % 20),
          genre: ["Action", "Drama", "Comedy"][p.id % 3],
          rating: (p.id % 5) + 1,
          editing: false,
        }));

        setMovies(adapted);
        setFiltered(adapted);
        setLoading(false);
      } catch {
        setError("Failed to load movies");
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      let data = [...movies];

      if (search) {
        data = data.filter((m) =>
          m.title.toLowerCase().includes(search.toLowerCase()),
        );
      }

      if (genre) {
        data = data.filter((m) => m.genre === genre);
      }

      if (sort) {
        data.sort((a, b) => b[sort] - a[sort]);
      }

      setFiltered(data);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, genre, sort, movies]);

  function addMovie(movie) {
    setMovies([...movies, { ...movie, id: Date.now(), editing: false }]);
  }

  function deleteMovie(id) {
    if (window.confirm("Delete movie?")) {
      setMovies(movies.filter((m) => m.id !== id));
    }
  }

  function toggleEdit(id) {
    setMovies(
      movies.map((m) => (m.id === id ? { ...m, editing: !m.editing } : m)),
    );
  }

  function updateMovie(id, key, value) {
    setMovies(movies.map((m) => (m.id === id ? { ...m, [key]: value } : m)));
  }

  const start = (page - 1) * PER_PAGE;
  const paginatedMovies = filtered.slice(start, start + PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Movie Manager</h1>

      <MovieForm addMovie={addMovie} />

      <Controls setSearch={setSearch} setGenre={setGenre} setSort={setSort} />

      <MovieList
        movies={paginatedMovies}
        deleteMovie={deleteMovie}
        toggleEdit={toggleEdit}
        updateMovie={updateMovie}
      />

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
