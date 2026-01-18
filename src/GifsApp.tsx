import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleSearchClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase(); // el query tiene que estar en lowercase y cortar espacios

    if (query.length === 0) return; // Validamos que no sea un string vacio

    if (previousSearches.includes(query)) return; // Validamos que no sea un query ya buscado anteriormente

    setPreviousSearches([query, ...previousSearches].splice(0, 8)); // lo anadimos y limitamos a 8

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        placeholder="Busca tu gif favorito..."
        onQuery={handleSearch}
      />

      {/* Previous searches */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleSearchClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
