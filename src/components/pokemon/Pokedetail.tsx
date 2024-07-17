// solo hacer fetch si selected.length es mayor a 0

import { useEffect, useState } from "react";

interface PokedetailProps {
  selected: string;
}

interface DetailPokemon {
  photo: string;
  name: string;
  type: string;
  attack: number;
  defense: number;
  ability: string;
}

function Pokedetail(props: PokedetailProps) {
  const { selected } = props;

  const [pokemon, setPokemon] = useState<DetailPokemon>();

  useEffect(() => {
    fetch(selected)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.sprites.other.dream_world.front_default);
        // console.log(res.name);
        // console.log(res.types[0].type.name);
        // console.log(res.stats[1].base_stat);
        // console.log(res.stats[2].base_stat);
        // console.log(res.abilities[1].ability.name)

        setPokemon({
          photo: res.sprites.other.dream_world.front_default,
          name: res.name,
          type: res.types[0].type.name,
          attack: res.stats[1].base_stat,
          defense: res.stats[2].base_stat,
          ability: res.abilities[1].ability.name,
        });
      });
  }, [selected]);

  return (
    <div className="w-[500px] h-[700px] p-8 bg-[#9EDEF9] border-solid border-2 border-black rounded-xl">
      <div className="flex justify-center">
        <img
          className="h-[400px] w-[400px] rounded-xl"
          src={pokemon?.photo}
          alt="imagen pokemon"
        />
      </div>
      <div>
        <div className="flex gap-36 justify-center h-10 py-16">
          <p className="text-xl font-bold capitalize">{pokemon?.name}</p>
          <p className="text-xl font-semibold capitalize">{pokemon?.type}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2">
            <img src="./swords.svg" alt="logo ataque" />
            <p className="text-xl font-bold capitalize">
              ataque:{" "}
              <span className="text-lg font-semibold">{pokemon?.attack}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <img src="./shield.svg" alt="logo defensa" />
            <p className="text-xl font-bold capitalize">
              defensa:{" "}
              <span className="text-lg font-semibold">{pokemon?.defense}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <img src="./star.svg" alt="" />
            <p className="text-xl font-bold capitalize">
              habilidades:{" "}
              <span className="text-lg font-semibold">{pokemon?.ability}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedetail;
