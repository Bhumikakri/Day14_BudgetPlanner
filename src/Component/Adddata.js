// Adddata.js
import React from 'react';
import { useBudget } from './BudgetContext';

const Adddata = () => {
  const { state, dispatch } = useBudget();

  const deltFn = (dlt) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: dlt });
  };

  return (
    <div>
        <h2>Expenses</h2>
      {state.list.length === 0 ? (
        <p>Add Data To List . . . . .</p>
      ) : (
        state.list.map((items) => (
          <div key={items.Name}>
            <h4>{items.Name}</h4>
            <span>
              Rs{items.Cost} <button onClick={() => deltFn(items.Name)}>x</button>
            </span>
          </div>
        ))
      )}
    </div> 
  );
};

export default Adddata;
