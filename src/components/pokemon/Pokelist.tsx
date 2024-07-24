import PokemonCard from "./PokemonCard";

interface PokelistProps {
  pokemons: {
    name: string;
    url: string;
  }[];
  setSelected: (selected: string) => void;
}

function Pokelist(props: PokelistProps) {
  const { pokemons, setSelected } = props;

  return (
    <div className="flex flex-wrap gap-4">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            onClick={() => {
              setSelected(pokemon.url);
            }}
            pokemonItem={pokemon}
          />
        );
      })}
    </div>
  );
}

export default Pokelist;
