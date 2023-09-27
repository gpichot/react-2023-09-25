import { Meta, StoryObj } from "@storybook/react";
import PokemonForm from "./PokemonForm";

const meta: Meta<typeof PokemonForm> = {
  title: "PokemonForm",
  component: PokemonForm,
};

export default meta;

type Story = StoryObj<typeof PokemonForm>;

export const Default: Story = {};
