import { useEffect, useState } from "react";
import Pokedetail from "./Pokedetail";
import PokeList from "./Pokelist";

interface Buttons {
  next: string;
  previous: string;
}

interface NamePokemon {
  name: string;
  url: string;
}

function Pokedex() {
  const [selected, setSelected] = useState("");
  const [pokebutton, setPokebutton] = useState<Buttons>();
  const [pokemons, setPokemons] = useState<NamePokemon[]>([]);
  const [pokeurl, setPokeurl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    fetch(pokeurl)
      .then((res) => res.json())
      .then((res) => {
        setPokebutton({
          next: res.next,
          previous: res.previous,
        });
        setPokemons(res.results);
      });
  }, [pokeurl]);

  return (
    <div className="w-max-[1920px] m-0 p-6 text-center bg-[#FCEEC8]">
      <h1 className="text-[64px]">Pokedex</h1>
      <div className="flex gap-5 pt-5">
        <div className="w-[60%] pl-8">
          <PokeList setSelected={setSelected} pokemons={pokemons} />
        </div>
        <div className="w-[40%] flex justify-center items-start">
          <Pokedetail selected={selected} />
        </div>
      </div>
      <div className="flex gap-[50px] justify-center p-5">
        <button
          onClick={() => {
            if (pokebutton?.previous) {
              setPokeurl(pokebutton.previous);
            }
          }}
          className="border-solid border-black border-2 w-[150px] h-[50px] rounded-lg bg-red-400 font-bold text-xl"
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (pokebutton?.next) {
              setPokeurl(pokebutton.next);
            }
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
