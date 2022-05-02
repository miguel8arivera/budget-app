import React, { useState, useEffect } from "react";
import CloseBtn from "../img/cerrar.svg";
import Message from "./message";

const Modal = ({
  setModal,
  animationModal,
  setAnimationModal,
  saveExpense,
  expentEdit,
}) => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (Object.keys(expentEdit).length > 0) {
      setName(expentEdit.name);
      setAmount(expentEdit.amount);
      setCategory(expentEdit.category);
    }
  }, []);
  const handleBtnClose = () => {
    setAnimationModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
    if ([name, amount, category].includes("")) {
      setMsg("All fields is required");
      setTimeout(() => {
        setMsg("");
      }, 3000);
      return;
    }

    saveExpense({ name, amount, category });
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Boton de cerrar" onClick={handleBtnClose} />
      </div>

      <form
        className={`formulario ${animationModal ? "animar" : "cerrar"} `}
        onSubmit={hanleSubmit}
      >
        <legend>New Expense</legend>
        {msg && <Message tipo="error">{msg}</Message>}
        <div className="campo">
          <label htmlFor="name">Expense name</label>
          <input
            type="text"
            id="name"
            placeholder="Add expense name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Add amount here here ej. 300"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="saving">Saving</option>
            <option value="meal">Meal</option>
            <option value="house">House</option>
            <option value="expense">Various Expense</option>
            <option value="osseous">Osseous</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

export default Modal;
