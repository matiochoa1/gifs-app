import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
  placeholder: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Buscar",
  onQuery,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700); // no se ejecuta el efecto hasta que no pase el tiempo especificado

    return () => {
      clearTimeout(timeoutId);
    }; // Los efectos tienen un retorno muy especial - se va a disparar cuando el componente se va a desmontar o se va a volver a disparar el efecto
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
