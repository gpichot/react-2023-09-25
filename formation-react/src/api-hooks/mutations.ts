import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiUrl } from "../config";

type PokemonCreatePayload = {
  name: string;
  type: string;
  weight: number;
  height: number;
};

export function useCreatePokemonMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: PokemonCreatePayload) => {
      const response = await fetch(`${apiUrl}/pokemons/`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
}
