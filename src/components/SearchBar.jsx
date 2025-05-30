import searchIcon from "../assets/search.png";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search" className="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
