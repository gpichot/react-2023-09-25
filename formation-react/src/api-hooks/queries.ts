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
export function usePokemonListQuery({ offset }: { offset: number }) {
  return useQuery({
    queryKey: ["pokemons", { offset }],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/pokemons/?offset=${offset}`);
      const result = await response.json();
      return result as {
        count: number;
        nextLimit: number | null;
        results: PokemonDetail[];
      };
    },
    staleTime: 5 * 60 * 1000,
  });
}
