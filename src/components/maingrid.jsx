import React, { useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//components
import Balance from "./balance";
import ListOfExpense from "./list";
import AddTransaction from "./addtransactions";
import { GlobalContext } from "../globalcontext/globalcontext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  colora: {
    color: "rgb(170, 0, 0,.8)",
  },
  colorb: {
    color: "rgb(0, 100, 0,.8)",
  },
}));

// MAINGRID COMPONENT
function MainGrid() {
  const classes = useStyles();

  // USING GLOBAL CONTEXT
  const { transactions } = useContext(GlobalContext);

  // CALCULATE TOTAL INCOME
  const income = transactions
    .filter((plus) => Number(plus.amount) > 0)
    .reduce((prev, curr) => (prev += Number(curr.amount)), 0)
    .toFixed(2);
  // CALCULATE TOTAL EXPENSE
  const expense = transactions
    .filter((minus) => Number(minus.amount) < 0)
    .reduce((prev, curr) => (prev += Number(curr.amount)), 0);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Balance />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant="subtitle2" component="h2">
              INCOME
            </Typography>
            <Typography variant="h6" component="h2" className={classes.colorb}>
              +${income}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant="subtitle2" component="h2">
              EXPENSE
            </Typography>
            <Typography variant="h6" component="h2" className={classes.colora}>
              -${Math.abs(expense).toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <ListOfExpense />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <AddTransaction />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainGrid;
