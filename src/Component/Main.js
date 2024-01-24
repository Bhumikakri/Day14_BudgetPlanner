import "./Main.css";
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
    <div className="Main">
      <h1 style={{textDecoration:"underline",fontSize:"3rem"}}>My Budget Planner</h1>
      <div style={{display:"flex"}}>
      <label>Set your budget: </label>
      <input
      className="Inp1"
        type='number'
        min="1000"
        value={state.budget}
        onChange={(e) => dispatch({ type: 'UPDATE_BUDGET', payload: e.target.value })}
      />
      </div>
      <div className="details">
        <div className="border">
          <span>Budget: Rs.{state.budget}</span>
        </div>
        <div className="border">
          <span>Remaining: Rs.{state.budget - Total()}</span>
        </div>
        <div className="border">
          <span>Spent so far: Rs.{Total()}</span>
        </div>
      </div>
      <Adddata />
      <div>
        <h2>Add Expenses</h2>
        <form style={{display:"flex", justifyContent:"space-around"}}>
          <div>
            <label>Name:</label>
            <input type="text" ref={nameRef} required  className="Inp"/>
          </div>
          <div>
            <label>Cost</label>
            <input type="number" ref={costRef} required className="Inp" />
          </div>
          <button type="submit" className="Btnn"onClick={BtnClickFn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
