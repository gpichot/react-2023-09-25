/**
 * React Pokemon Form for name, type, height and weight
 */

import { FormEventHandler, useState } from "react";
import InputControl from "./InputControl";
import { useCreatePokemonMutation } from "../api-hooks/mutations";
import { useNavigate } from "react-router-dom";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const navigate = useNavigate();

  const createPokemonMutation = useCreatePokemonMutation();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const payload = { name, type, height, weight };
    createPokemonMutation.mutateAsync(payload, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Name"
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputControl
        label="Type"
        id="type"
        type="text"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <InputControl
        label="Height"
        id="height"
        type="number"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.target.valueAsNumber)}
      />
      <InputControl
        label="Weight"
        id="weight"
        type="number"
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.valueAsNumber)}
      />
      <button type="submit">Add Pokemon</button>
    </form>
  );
}
