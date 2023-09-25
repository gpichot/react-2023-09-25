import styles from "./App.module.css";
import React from "react";

interface Produit {
  nom: string;
  description?: React.ReactNode;
  aStock?: boolean;
}

export interface CarteProduitProps {
  children?: React.ReactNode;
  produit: Produit;
}

function CarteProduit(props: CarteProduitProps) {
  const { children, produit } = props;
  const { nom, description, aStock = true } = produit;
  // const nom = props.nom;

  if (!aStock) {
    return (
      <div>
        <p>{nom}</p>
        <p>Plus de {nom} en stock</p>
      </div>
    );
  }

  return (
    <div>
      <p>{nom}</p>
      {description && <div>{description}</div>}
      {children}
    </div>
  );
}

const produits: Produit[] = [
  {
    nom: "Pain",
    description: "Foo",
  },
  {
    nom: "Croissant",
    description: (
      <>
        Foo <strong>Hello</strong>
      </>
    ),
  },
  {
    nom: "Pain au chocolat",
    aStock: false,
  },
];

function App() {
  const content = produits.map((produit) => (
    <CarteProduit key={produit.nom} produit={produit} />
  ));

  return (
    <div className={styles.app}>
      <h1>Boulangerie</h1>
      {content}
    </div>
  );
}

export default App;
