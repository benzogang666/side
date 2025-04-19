import "./Search.css";
import Vertical_Card from "../../components/cards/vertical-card/Vertical-Card";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

const Search = () => {
  const products = useProducts();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const lowerQuery = value.toLowerCase();
    const found = [];

    products.categories.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.items.forEach((item) => {
          const inName = item.name.toLowerCase().includes(lowerQuery);
          const inDetails = item.details.toLowerCase().includes(lowerQuery);

          if (inName || inDetails) {
            found.push({
              ...item,
              category: category.name,
              subcategory: subcategory.name,
            });
          }
        });
      });
    });

    setResults(found);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск по продуктам..."
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