import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  transactions: [
    { id: 1, description: "income1", amount: 2000 },
    { id: 2, description: "expense1", amount: -1000 },
    { id: 3, description: "expense2", amount: -4000 },
    { id: 4, description: "income2", amount: 5000 },
  ],
};

// CREATING GLOBAL CONTEXT TO MANAGE GLOBAL STATE
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
export const GlobalProvider = ({ children }) => {
  // REDUCER TO MANAGE AND UPDATE GLOBAL STATES
  const [state, dispatch] = useReducer(reducer, initialState);

  // DELETE TRANSACRION FUNCTION
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // ADD TRANSACTION FUNCTION
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
