// solo hacer fetch si selected.length es mayor a 0

interface PokedetailProps {
  selected: string;
}

function Pokedetail(props: PokedetailProps) {
  const { selected } = props;
  return <div>{selected}</div>;
}

export default Pokedetail;
