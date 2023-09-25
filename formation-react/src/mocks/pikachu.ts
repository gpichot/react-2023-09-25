import { PokemonDetail } from "../types";

export const pikach: PokemonDetail = {
  id: 25,
  name: "pikachu",
  types: ["electric"],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  weight: 60,
  height: 4,
  base_experience: 112,
  forms: ["pikachu"],
  abilities: ["static", "lightning-rod"],
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    "special-attack": 50,
    "special-defense": 50,
    speed: 90,
  },
};
