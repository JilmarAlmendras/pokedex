import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

interface PokelistProps {
  selected: string;
  setSelected: (selected: string) => void;
}

interface NamePokemon {
  name: string;
  url: string;
}

function Pokelist(props: PokelistProps) {
  const { selected, setSelected } = props;
  console.log(selected);
  console.log(setSelected);

  const [pokemons, setPokemons] = useState<NamePokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.results);
        setPokemons(res.results);
      });
  }, []);

  //console.log(pokemons);

  return (
    <div className="flex flex-wrap gap-4">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            url={pokemon.url}
            key={pokemon.name}
          />
        );
      })}
    </div>
  );
}

export default Pokelist;
