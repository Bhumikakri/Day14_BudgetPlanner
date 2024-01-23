// App.js
import React from 'react';
import Main from './Component/Main';
import { BudgetProvider } from './Component/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Main />
      </div>
    </BudgetProvider>
  );
}

export default App;
