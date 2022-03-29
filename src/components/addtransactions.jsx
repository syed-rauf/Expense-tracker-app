import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import { GlobalContext } from "../globalcontext/globalcontext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    maxWidth: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

export default function AddTransaction() {
  const classes = useStyles();

  const { addTransaction } = useContext(GlobalContext);

  // LOCAL STATES FOR GETTING AMOUNT AND DESCRIPTION FOR NEW TRANSACTIONS
  const [description, setdescription] = useState("");
  const [amount, setamount] = useState("");

  // FORM SUBMIT FUNCTION HANDLE NEW TRANSACTION
  const handleSubmit = (e) => {
    e.preventDefault();

    const newAdd = {
      id: nanoid(),
      description,
      amount,
    };

    if (description !== "" && amount !== "") {
      addTransaction(newAdd);
      setamount("");
      setdescription("");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        type="text"
        id="filled-secondary"
        label="Transaction Description"
        variant="filled"
        color="secondary"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />

      <TextField
        type="number"
        id="filled-secondary"
        label="Transaction Amount"
        variant="filled"
        color="secondary"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Transaction
      </Button>
    </form>
  );
}
