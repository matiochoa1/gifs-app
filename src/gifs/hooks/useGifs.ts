import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};
// Sacamos el objeto del ciclo de vida del hook para evitar que un re render borre lo que estamos intentando guardas

export default function useGifs() {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({}); // mantiene el estado a lo largo de re-renders

  const handleSearchClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase(); // el query tiene que estar en lowercase y cortar espacios

    if (query.length === 0) return; // Validamos que no sea un string vacio

    if (previousSearches.includes(query)) return; // Validamos que no sea un query ya buscado anteriormente

    setPreviousSearches([query, ...previousSearches].splice(0, 8)); // lo anadimos y limitamos a 8

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    gifs,
    previousSearches,
    handleSearchClicked,
    handleSearch,
  };
}
