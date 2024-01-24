// Adddata.js
import React from "react";
import { useBudget } from "./BudgetContext";

const Adddata = () => {
  const { state, dispatch } = useBudget();

  const deltFn = (dlt) => {
    dispatch({ type: "DELETE_EXPENSE", payload: dlt });
  };

  return (
    <div>
      <h2>Expenses</h2>
      <div style={{display:"flex", flexDirection:"column", gap:"2rem", alignItems:"center"}}>
        {state.list.length === 0 ? (
          <p style={{color:"greenyellow"}}>Add Data To List . . . . .</p>
        ) : (
          state.list.map((items) => (
            <div key={items.Name} className="List">
              <h4>{items.Name}</h4>
              <span>
                Rs{items.Cost}{" "}
                <button onClick={() => deltFn(items.Name)}>x</button>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Adddata;
