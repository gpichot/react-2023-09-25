/**
 * React Pokemon Form for name, type, height and weight
 */

import { FormEventHandler, useState } from "react";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log({ name, type, height, weight });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <input
          id="type"
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          type="text"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button type="submit">Add Pokemon</button>
    </form>
  );
}
