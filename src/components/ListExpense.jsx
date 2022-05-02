import React from "react";
import Expense from "./Expense";

const ListExpense = ({ expenses, setExpentEdit }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "No Expenses yet"}</h2>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpentEdit={setExpentEdit}
        />
      ))}
    </div>
  );
};

export default ListExpense;
