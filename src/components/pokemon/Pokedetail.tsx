// solo hacer fetch si selected.length es mayor a 0

interface PokedetailProps {
  selected: string;
}

function Pokedetail(props: PokedetailProps) {
  const { selected } = props;
  console.log(selected);

  return (
    <div className="w-[500px] h-[700px] p-8 bg-[#9EDEF9] border-solid border-2 border-black rounded-xl">
      <div className="flex justify-center">
        <img
          className="h-[400px] w-[400px] rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwinkU_23d5O57vg24zL24nXuJ2F25q0SLw&s"
          alt="imagen pokemon"
        />
      </div>
      <div>
        <div className="flex gap-36 justify-center h-10 py-16">
          <p className="text-xl font-bold capitalize">pikachu</p>
          <p className="text-xl font-semibold capitalize">rayo</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2">
            <img src="./swords.svg" alt="logo ataque" />
            <p className="text-xl font-bold capitalize">
              ataque: <span className="text-lg font-semibold">1000</span>
            </p>
          </div>
          <div className="flex gap-2">
            <img src="./shield.svg" alt="logo defensa" />
            <p className="text-xl font-bold capitalize">
              defensa: <span className="text-lg font-semibold">500</span>
            </p>
          </div>
          <div className="flex gap-2">
            <img src="./star.svg" alt="" />
            <p className="text-xl font-bold capitalize">
              habilidades:{" "}
              <span className="text-lg font-semibold">impactrueno</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedetail;
