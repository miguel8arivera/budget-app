import React from "react";
import ControlBudget from "./ControlBudget";
import NewBudget from "./NewBudget";

const Header = ({
  budget,
  setBudget,
  validBudget,
  setValidBudget,
  expenses,
}) => {
  return (
    <header>
      <h1>Budget Managment</h1>

      {validBudget ? (
        <ControlBudget budget={budget} expenses={expenses} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
