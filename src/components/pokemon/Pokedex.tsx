// url: https://pokeapi.co/api/v2/pokemon
// pintar una lista de pokemons
// cuando yo le de click a un pokemon me tiene que mostrar el detalle del pokemon
// para ver el detalle del pokemon usar

import { useEffect, useState } from "react";
import Pokedetail from "./Pokedetail";
import PokeList from "./Pokelist";

interface Buttons {
  next: string;
  previous: string;
}

function Pokedex() {
  const [selected, setSelected] = useState("");
  const [pokebutton, setPokebutton] = useState<Buttons>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.previous);
        setPokebutton({
          next: res.next,
          previous: res.previous,
        });
      });
  }, []);
  return (
    <div className="w-max-[1920px] m-0 p-6 text-center bg-[#FCEEC8]">
      <h1 className="text-[64px]">Pokedex</h1>
      <div className="flex gap-5 pt-5">
        <div className="w-[60%] pl-8">
          <PokeList selected={selected} setSelected={setSelected} />
        </div>
        <div className="w-[40%] flex justify-center items-start">
          <Pokedetail selected={selected} />
        </div>
      </div>
      <div className="flex gap-[50px] justify-center p-5">
        <button className="border-solid border-black border-2 w-[150px] h-[50px] rounded-lg bg-red-400 font-bold text-xl">
          Previous
        </button>
        <button
          onClick={() => {
            setPokebutton(pokebutton?.next);
          }}
          className="border-solid border-black border-2 w-[150px] h-[50px] rounded-lg bg-red-400 font-bold text-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pokedex;
