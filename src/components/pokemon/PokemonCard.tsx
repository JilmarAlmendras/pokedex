import { useEffect, useState } from "react";

interface PokemonCardProps {
  name: string;
  url: string;
}

interface InfoPokemon {
  photo: string;
  type: string;
}

function PokemonCard(props: PokemonCardProps) {
  const { name, url } = props;
  //console.log(url);
  const [pokemon, setPokemon] = useState<InfoPokemon>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.sprites.other.dream_world.front_default);
        //console.log(res.types[0].type.name);
        setPokemon({
          photo: res.sprites.other.dream_world.front_default,
          type: res.types[0].type.name,
        });
      });
  }, []);

  return (
    <div className="w-[200px] h-[250px] p-2 rounded-xl border-black border-solid border-2 bg-[#9EDEF9]">
      <img
        className="w-[200px] h-[200px] rounded-xl "
        src={pokemon?.photo}
        alt="imagen pokemon"
      />
      <div className="h-[50px] flex gap-6 justify-between">
        <p className="text-lg font-bold capitalize">{name}</p>
        <p className="text-lg font-semibold capitalize">{pokemon?.type}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
