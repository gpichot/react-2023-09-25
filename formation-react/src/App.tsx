import styles from "./App.module.css";
import PokemonForm from "./components/PokemonForm";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokemonListPage from "./pages/PokemonListPage";

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
