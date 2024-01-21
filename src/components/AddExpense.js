import { useContext, useRef } from "react";
import { StateStore } from "./Store/State-store";
import "./AddExpense.css";
const AddExpense = () => {
  let contextData = useContext(StateStore);
  let expenseEntered = useRef();
  let costEntered = useRef();
  return (
    <div className="addExpenseContainer">
      <h2>Add Expense</h2>
      <div className="d-flex justify-content-between inputField">
        <div
          className="d-flex flex-column mb-3 expenseName"
          style={{ width: "100%" }}
        >
          <label htmlFor="name">Name</label>
          <input
            ref={expenseEntered}
            type="text"
            id="name"
            style={{ width: "90%" }}
          />
        </div>
        <div
          className="d-flex flex-column mb-3 expenseCost"
          style={{ width: "100%" }}
        >
          <label htmlFor="name">Cost</label>
          <input
            ref={costEntered}
            type="number"
            id="name"
            style={{ width: "90%" }}
          />
        </div>
      </div>
      <button
        onClick={() => {
          contextData.handleNewExpense(
            expenseEntered.current.value,
            costEntered.current.value
          );
          expenseEntered.current.value = "";
          costEntered.current.value = "";
        }}
        type="button"
        className="btn btn-success"
      >
        Save
      </button>
    </div>
  );
};
export default AddExpense;