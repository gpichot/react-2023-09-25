import * as React from "react";
import { Link } from "react-router-dom";
import { PokemonDetail } from "../types";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? "lightgray" : "white" }}
    >
      <div className={styles.imageContainer}>
        <img src={pokemon.image} alt={pokemon.name} height={64} />
      </div>
      <div className={styles.info}>
        <span className={styles.number}>#{pokemon.id}</span>
        <h3 className={styles.name}>{pokemon.name}</h3>
      </div>
      <Link to={`/pokemons/${pokemon.id}`} className={styles.link}>
        Détail
      </Link>
    </div>
  );
}
