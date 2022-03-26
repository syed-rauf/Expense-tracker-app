export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
