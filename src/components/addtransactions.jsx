import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl } from "@material-ui/core";

import { GlobalContext } from "../globalcontext/globalcontext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
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
    <FormControl className={classes.root}>
      <TextField
        id="filled-secondary"
        label="Transaction Description"
        variant="filled"
        color="secondary"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />

      <TextField
        id="filled-secondary"
        label="Transaction Amount"
        variant="filled"
        color="secondary"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Add Transaction
      </Button>
    </FormControl>
  );
}
