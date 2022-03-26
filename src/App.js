import React from "react";
import "./App.css";
import MainGrid from "./components/maingrid";
import { GlobalProvider } from "./globalcontext/globalcontext";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Expense Tracker App</h1>
        <MainGrid />
      </div>
    </GlobalProvider>
  );
}

export default App;
