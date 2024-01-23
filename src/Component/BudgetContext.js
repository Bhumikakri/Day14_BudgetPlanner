// BudgetContext.js
import React, { createContext, useReducer, useContext } from 'react';

const BudgetContext = createContext();

const initialState = {
  budget: 1000,
  list: [],
};

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'DELETE_EXPENSE':
      const updatedList = state.list.filter(item => item.Name !== action.payload);
      return {
        ...state,
        list: updatedList,
      };
    case 'UPDATE_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

export { BudgetProvider, useBudget };
