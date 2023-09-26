import styles from "./App.module.css";
import { pokemons } from "./mocks/pokemons";
import PokemonCard from "./components/PokemonCard";
import PokemonForm from "./components/PokemonForm";

function App() {
  return (
    <div className={styles.app}>
      <h1>Pokedex</h1>
      <PokemonForm />
      <div className={styles.list}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
