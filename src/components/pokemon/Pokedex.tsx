// url: https://pokeapi.co/api/v2/pokemon
// pintar una lista de pokemons
// cuando yo le de click a un pokemon me tiene que mostrar el detalle del pokemon
// para ver el detalle del pokemon usar

import { useState } from "react";
import Pokedetail from "./Pokedetail";
import PokeList from "./Pokelist";

function Pokedex() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        <PokeList selected={selected} setSelected={setSelected} />
        <Pokedetail selected={selected} />
      </div>
    </div>
  );
}

export default Pokedex;
