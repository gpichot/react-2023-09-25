import styles from "./App.module.css";
import PokemonCard from "./components/PokemonCard";
import PokemonForm from "./components/PokemonForm";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { apiUrl } from "./config";
import { PokemonDetail } from "./types";
import PokemonDetailPage from "./pages/PokemonDetailPage";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

function PokemonListPage() {
  const pokemonListQuery = useQuery({
    queryKey: ["pokemons", { page }],
    queryFn: async () => {
      await sleep();
      const response = await fetch(`${apiUrl}/pokemons/`);
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

  return (
    <div className={styles.list}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

function Root() {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/pokemons/create">Nouveau pokemon</Link>
      </nav>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PokemonListPage />,
      },
      {
        path: "/pokemons/create",
        element: <PokemonForm />,
      },
      {
        path: "/pokemons/:pokemonId",
        element: <PokemonDetailPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <h1>Pokedex</h1>
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
