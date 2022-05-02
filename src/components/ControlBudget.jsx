import React, { useState, useEffect } from "react";

const ControlBudget = ({ budget, expenses }) => {
  const [spent, setSpent] = useState(0);
  const [available, setAvailable] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((acc, curr) => curr.amount + acc, 0);
    const totalAvailable = budget - totalSpent;
    setAvailable(totalAvailable);
    setSpent(totalSpent);
  }, [expenses]);

  const formatQuatity = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica it here!</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span> {formatQuatity(budget)}
        </p>
        <p>
          <span>Spent:</span> {formatQuatity(spent)}
        </p>
        <p>
          <span>Available:</span> {formatQuatity(available)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;
