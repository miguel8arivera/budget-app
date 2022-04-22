import React from "react";
import { formatDate } from "../helpers";
import IconoSaving from "../img/icono_ahorro.svg";
import IconoHouse from "../img/icono_casa.svg";
import IconoMeal from "../img/icono_comida.svg";
import IconoExpense from "../img/icono_gastos.svg";
import IconoOsseous from "../img/icono_ocio.svg";
import IconoHealth from "../img/icono_salud.svg";
import IconoSubscription from "../img/icono_suscripciones.svg";

const dictionaryIcon = {
  saving: IconoSaving,
  meal: IconoMeal,
  house: IconoHouse,
  expense: IconoExpense,
  osseous: IconoOsseous,
  health: IconoHealth,
  subscriptions: IconoSubscription,
};

const Expense = ({ expense }) => {
  const { name, amount, category, id, date } = expense;
  return (
    <div className="gasto sombra">
      <section className=" contenido-gasto">
        <img src={dictionaryIcon[category]} alt="Icono Gasto" />
        <article className="descripcion-gasto">
          <p className="nombre-gasto"> {name}</p>
          <p className="categoria"> {category}</p>
          <p className="fecha-gasto">
            Added the : {""} <span> {formatDate(date)}</span>
          </p>
        </article>
      </section>
      <p className="cantidad-gasto">{amount}</p>
    </div>
  );
};

export default Expense;
