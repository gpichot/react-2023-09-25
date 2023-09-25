import styles from "./App.module.css";
import { pokemons } from "./mocks/pokemons";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className={styles.app}>
      <h1>Pokedex</h1>
      <div className={styles.list}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
