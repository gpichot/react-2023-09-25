/**
 * React Pokemon Form for name, type, height and weight
 */

import { FormEventHandler, useState } from "react";
import InputControl from "./InputControl";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log({ name, type, height, weight });
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
        type="text"
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button type="submit">Add Pokemon</button>
    </form>
  );
}
