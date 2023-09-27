import React from "react";
import PokemonCard from "../components/PokemonCard";

import styles from "../App.module.css";
import { usePokemonListQuery } from "../api-hooks/queries";

const limit = 10;

export default function PokemonListPage() {
  const [offset, setOffset] = React.useState(0);
  const pokemonListQuery = usePokemonListQuery({ offset });

  if (pokemonListQuery.isLoading) {
    return <p>chargement en cours</p>;
  }

  if (pokemonListQuery.isError) {
    return (
      <p>
        erreur de chargement{" "}
        <button onClick={() => pokemonListQuery.refetch()}>retenter</button>
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
        <button onClick={() => setOffset(0)} disabled={offset === 0}>
          Premier
        </button>
        <button
          onClick={() => setOffset(offset - limit)}
          disabled={offset === 0}
        >
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
