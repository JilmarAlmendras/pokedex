import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          if (count <= 0) {
            return;
          }
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default Contador;
