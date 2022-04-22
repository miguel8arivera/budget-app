import { useState } from "react";
import Header from "./components/Header";
import ListExpense from "./components/ListExpense";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import NewBottonSpent from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimationModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);
    setAnimationModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="App">
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />

      {validBudget && (
        <>
          <main>
            <ListExpense expenses={expenses} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={NewBottonSpent}
              alt="Icon new spent"
              onClick={handleNewSpent}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
          saveExpense={saveExpense}
        />
      )}
    </div>
  );
}

export default App;
