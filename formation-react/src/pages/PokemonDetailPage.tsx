import { useParams } from "react-router-dom";

import { Link, useParams } from "react-router-dom";

export default function PokemonDetailPage() {
    const { pokemonId } = useParams<{ pokemonId: string }>();

    return (
    );
}
