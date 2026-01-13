import { useMemo, useState } from "react";

const productsData = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Books", "Home"][i % 4],
  price: Math.floor(Math.random() * 200) + 20,
  inStock: Math.random() > 0.3,
}));

export default function Filter() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    setInStockOnly(false);
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchMinPrice =
        minPrice === "" || product.price >= Number(minPrice);

      const matchMaxPrice =
        maxPrice === "" || product.price <= Number(maxPrice);

      const matchStock = !inStockOnly || product.inStock;

      return matchCategory && matchMinPrice && matchMaxPrice && matchStock;
    });
  }, [selectedCategories, minPrice, maxPrice, inStockOnly]);

  return (
    <div>
      <div>
        <strong>Category:</strong>
        {["Electronics", "Clothing", "Books", "Home"].map((cat) => (
          <label key={cat} style={{ marginLeft: 10 }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <strong>Price:</strong>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ marginLeft: 10 }}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ marginLeft: 5 }}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={() => setInStockOnly((v) => !v)}
          />
          In Stock Only
        </label>
      </div>

      <button onClick={clearFilters}>Clear All Filters</button>

      <p>Results: {filteredProducts.length}</p>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} | {p.category} | ₹{p.price} |{" "}
            {p.inStock ? "In Stock" : "Out of Stock"}
          </li>
        ))}
      </ul>
    </div>
  );
}
