import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
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

const Expense = ({ expense, setExpentEdit }) => {
  const { name, amount, category, id, date } = expense;
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpentEdit(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("Deliting...")}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
