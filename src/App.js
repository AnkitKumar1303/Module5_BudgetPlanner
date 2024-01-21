import "./App.css";
import ShowBudget from "./components/ShowBudget";
import ShowExpenseList from "./components/ShowExpenseList";
import AddExpense from "./components/AddExpense";
import { StateStore } from "./components/Store/State-store";
import { useState } from "react";

function App() {

  let [expenseList, setExpenseList] = useState(
    JSON.parse(localStorage.getItem("ExpenseList")) != null
      ? JSON.parse(localStorage.getItem("ExpenseList"))
      : []
  );
  let [total, setTotal] = useState(getTotal());


  function handleNewExpense(expName, amount) {
    if (expName == " " || amount== "") {
      alert("Please enter expense data");
      return;
    }
      setExpenseList((prev) => [
        ...expenseList,
        { expense: expName, cost: amount },
      ]);
    localStorage.setItem(
      "ExpenseList",
      JSON.stringify([...expenseList, { expense: expName, cost: amount }])
    );
    setTotal(getTotal());
  }

  function getTotal() {
    let newTotal = 0;
    let arr = JSON.parse(localStorage.getItem("ExpenseList")) != null? JSON.parse(localStorage.getItem("ExpenseList")) : []
    arr.map((ele) => {
      newTotal = newTotal + Number(ele.cost);
    });
    console.log(newTotal);
    return newTotal;
  }


  function deleteExpense(deletedIdx) {
    let newList = expenseList.filter((ele, idx) => {
      return deletedIdx != idx;
    });
    setExpenseList((prev) => [...newList]);
    localStorage.setItem("ExpenseList", JSON.stringify(newList));
    setTotal(getTotal());
  }

  return (
    <div className="container">
      <StateStore.Provider
        value={{ expenseList, handleNewExpense, deleteExpense, total }}
      >
        <ShowBudget />
        <ShowExpenseList />
        <AddExpense />
      </StateStore.Provider>
    </div>
  );
}

export default App;
