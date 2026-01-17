export default function Controls({ setSearch, setGenre, setSort }) {
  return (
    <div>
      <input
        placeholder="Search title"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">No Sort</option>
        <option value="rating">Sort by Rating</option>
        <option value="year">Sort by Year</option>
      </select>
    </div>
  );
}
