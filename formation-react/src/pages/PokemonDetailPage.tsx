import { useParams } from "react-router-dom";
import { apiUrl } from "../config";
import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "../types";

export default function PokemonDetailPage() {
  const { pokemonId } = useParams<{ pokemonId: string }>();

  const pokemonDetailQuery = useQuery({
    queryKey: ["pokemon-detail", pokemonId],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/pokemons/${pokemonId}`);
      const result = await response.json();
      return result as PokemonDetail;
    },
  });

  if (pokemonDetailQuery.isLoading) {
    return <p>Is loading...</p>;
  }

  if (pokemonDetailQuery.isError) {
    return <p>Something went wrong...</p>;
  }

  const { data: pokemonDetail } = pokemonDetailQuery;

  return (
    <div>
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.image} alt={pokemonDetail.name} height={64} />
      <p>Height: {pokemonDetail.height}</p>
      <p>Weight: {pokemonDetail.weight}</p>
      <p>
        Types:{" "}
        {pokemonDetail.types.map((type) => (
          <span>{type}</span>
        ))}
      </p>
      <p>
        Stats:{" "}
        {Object.entries(pokemonDetail.stats).map(([name, value]) => (
          <div>
            {name}: {value}
          </div>
        ))}
      </p>
    </div>
  );
}
