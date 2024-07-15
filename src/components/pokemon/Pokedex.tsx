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
    <div className="w-max-[1920px] m-0 p-6 text-center bg-amber-200">
      <h1 className="text-[64px]">Pokedex</h1>
      <div className="flex gap-5">
        <div className="w-[50%]">
          <PokeList selected={selected} setSelected={setSelected} />
        </div>
        <div className="w-[50%]">
          <Pokedetail selected={selected} />
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
