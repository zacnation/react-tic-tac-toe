import { useState } from "react";

export default function Square() {
  const [value, setvalue] = useState(null);

  function handleClick() {
    setvalue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
