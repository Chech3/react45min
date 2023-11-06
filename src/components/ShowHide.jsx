import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);
  const handleClick = (event) => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide" : "Show"} Text</button>
      {show && <h2>Texto a mostrar</h2>}
    </div>
  );
}

export default ShowHide;
