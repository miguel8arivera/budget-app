import React from "react";

const Expense = ({ expense }) => {
  const { name, amount, category, id } = expense;
  return (
    <div className="gasto sombra">
      <section className=" contenido-gasto">
        <article className="descripcion-gasto">
          <p className="nombre-gasto"> {name}</p>
          <p className="categoria"> {category}</p>
        </article>
      </section>
    </div>
  );
};

export default Expense;
