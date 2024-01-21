import { MdDelete } from "react-icons/md";
import { StateStore } from "./Store/State-store";
import { useContext } from "react";
import "./ShowExpense.css";
const ShowExpenseList = () => {
  const contextData = useContext(StateStore);
  const expenseList = contextData.expenseList;
  const deleteExp = contextData.deleteExpense;

  return (
    <div className="ShowExpenses">
      <h2>Expense</h2>
      {expenseList.length !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Expense</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {expenseList.map((exp, idx) => {
              return (
                <tr key={idx + "explist"}>
                  <th scope="row">{idx + 1}</th>
                  <td>{exp.expense}</td>
                  <td>{exp.cost}</td>
                  <td onClick={() => deleteExp(idx)}>
                    <MdDelete />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>Add Data To List . . . .</h1>
      )}
    </div>
  );
};
export default ShowExpenseList;