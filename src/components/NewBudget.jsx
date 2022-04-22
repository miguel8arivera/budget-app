import React, { useState } from "react";
import Message from "./message";

const NewBudget = ({ budget, setBudget, setValidBudget }) => {
  const [msg, setMsg] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!budget || budget <= 0) {
      setMsg("It is not a valid budget");
      return;
    }
    setMsg("");

    setValidBudget(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlerSubmit} className="formulario">
        <div className="campo">
          <label>Define Budget</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <input type="submit" value="Add" />

          {msg && <Message tipo="error">{msg}</Message>}
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
