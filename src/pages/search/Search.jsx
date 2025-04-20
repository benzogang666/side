import "./Search.css";
import Vertical_Card from "../../components/cards/vertical-card/Vertical-Card";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

const Search = () => {
  const products = useProducts();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase().trim();
    setQuery(e.target.value);
    if (!q) return setResults([]);

    const found = products.categories.flatMap((c) =>
      c.subcategories.flatMap((s) =>
        s.items
          .filter(
            (i) =>
              i.name.toLowerCase().includes(q) ||
              i.details.toLowerCase().includes(q)
          )
          .map((i) => ({ ...i, category: c.name, subcategory: s.name }))
      )
    );

    setResults(found);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-field"
        placeholder="Поиск..."
        value={query}
        onChange={handleSearch}
      />

      <div className="search-repository">
        <div className="vertical-cards">
          {results.map((line) => (
            <Vertical_Card round={line} key={line.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;