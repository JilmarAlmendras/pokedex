interface ListProps {
  frutas: { id: number; nombre: string; foto: string }[];
}
function List(props: ListProps) {
  const { frutas } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
      {frutas.map((fruta) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }} key={fruta.id}>
            <img
              style={{ width: 48, height: 48 }}
              src={fruta.foto}
              alt="fruta"
            />
            {fruta.nombre}
          </div>
        );
      })}
    </div>
  );
}

export default List;
