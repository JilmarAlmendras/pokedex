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
    <div
      style={{
        width: 200,
        height: 250,
        padding: 8,
        borderRadius: 12,
        border: "1px solid black",
        backgroundColor: "#9EDEF9",
      }}
    >
      <img
        style={{ width: 200, height: 200, borderRadius: 12 }}
        src={pokemon?.photo}
        alt="imagen pokemon"
      />
      <div
        style={{
          height: 50,
          display: "flex",
          gap: 24,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{name}</p>
        <p>{pokemon?.type}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
