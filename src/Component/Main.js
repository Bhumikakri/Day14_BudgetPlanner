// Main.js
import React, { useRef } from 'react';
import Adddata from './Adddata';
import { useBudget } from './BudgetContext';

const Main = () => {
  const { state, dispatch } = useBudget();
  const nameRef = useRef();
  const costRef = useRef();

  const BtnClickFn = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const cost = parseInt(costRef.current.value, 10);
    dispatch({ type: 'ADD_EXPENSE', payload: { Name: name, Cost: cost } });
    nameRef.current.value = '';
    costRef.current.value = '';
  };

  const Total = () => {
    return state.list.reduce((accu, curr) => {
      accu += curr.Cost;
      return accu;
    }, 0);
  };

  return (
    <div>
      <h1>My Budget Planner</h1>
      <label>Set your budget: </label>
      <input
        type='number'
        min="1000"
        value={state.budget}
        onChange={(e) => dispatch({ type: 'UPDATE_BUDGET', payload: e.target.value })}
      />
      <div>
        <div>
          <span>Budget: Rs.{state.budget}</span>
        </div>
        <div>
          <span>Remaining: Rs.{state.budget - Total()}</span>
        </div>
        <div>
          <span>Spent so far: Rs.{Total()}</span>
        </div>
      </div>
      <Adddata />
      <div>
        <h2>Add Expenses</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" ref={nameRef} required />
          </div>
          <div>
            <label>Cost</label>
            <input type="number" ref={costRef} required />
          </div>
          <button type="submit" onClick={BtnClickFn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
