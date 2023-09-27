import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../config";
import { PokemonDetail } from "../types";

export function usePokemonDetailQuery(pokemonId: string | undefined) {
  return useQuery({
    queryKey: ["pokemon-detail", pokemonId],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/pokemons/${pokemonId}`);
      const result = await response.json();
      return result as PokemonDetail;
    },
  });
}
