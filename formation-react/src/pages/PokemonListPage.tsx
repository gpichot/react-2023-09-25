import { useQuery } from "@tanstack/react-query";
import React from "react";
import PokemonCard from "../components/PokemonCard";
import { apiUrl } from "../config";
import { PokemonDetail } from "../types";

import styles from "../App.module.css";

const limit = 10;
const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

export default function PokemonListPage() {
  const [offset, setOffset] = React.useState(0);
  const pokemonListQuery = useQuery({
    queryKey: ["pokemons", { offset }],
    queryFn: async () => {
      await sleep();
      const response = await fetch(`${apiUrl}/pokemons/?offset=${offset}`);
      const result = await response.json();
      return result as {
        count: number;
        nextLimit: number | null;
        results: PokemonDetail[];
      };
    },
    staleTime: 10 * 1000,
  });

  if (pokemonListQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }

  if (pokemonListQuery.isError) {
    return (
      <p>
        Erreur de chargement{" "}
        <button onClick={() => pokemonListQuery.refetch()}>Retenter</button>
      </p>
    );
  }

  const pokemons = pokemonListQuery.data.results;
  const total = pokemonListQuery.data.count;

  return (
    <div className={styles.list}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}

      <div>
        <button onClick={() => setOffset(0)} disabled={offset !== 0}>
          Premier
        </button>
        <button onClick={() => setOffset(offset - limit)} disabled={offset > 0}>
          Précédent
        </button>
        <button
          onClick={() => setOffset(offset + limit)}
          disabled={offset + limit >= total}
        >
          Suivant
        </button>
        <button
          onClick={() => setOffset(Math.floor(offset / limit) * limit)}
          disabled={offset + limit >= total}
        >
          Dernier
        </button>
      </div>
    </div>
  );
}
