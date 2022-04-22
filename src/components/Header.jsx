import React from "react";
import ControlBudget from "./ControlBudget";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget, validBudget, setValidBudget }) => {
  return (
    <header>
      <h1>Budget Managment</h1>

      {validBudget ? (
        <ControlBudget budget={budget} />
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
