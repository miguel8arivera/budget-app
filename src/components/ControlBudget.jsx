import React, { useState, useEffect } from "react";

const ControlBudget = ({ budget, expenses }) => {
  const [spent, setSpent] = useState(10);
  useEffect(() => {
    const totalSpent = expenses.reduce((acc, curr) => curr.amount + acc, 0);
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
          <span>Available:</span> {formatQuatity(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;
