import React from "react";
import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { GlobalContext } from "../globalcontext/globalcontext";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce(
    (prev, curr) => (prev += Number(curr.amount)),
    0
  );

  const sign = balance > -1 ? "" : "-";

  return (
    <>
      <Typography variant="h6" component="h2">
        Current Balance
      </Typography>
      <Typography variant="h4" component="h2">
        {sign}${Math.abs(balance).toFixed(2)}
      </Typography>
    </>
  );
}
