import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import { GlobalContext } from "../globalcontext/globalcontext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  colora: {
    color: "rgb(170, 0, 0,.8)",
  },
  colorb: {
    color: "rgb(0, 100, 0,.8)",
  },
}));

export default function ListOfExpense() {
  const classes = useStyles();

  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const genrateList = transactions.map((transaction, i) => (
    <ListItem key={i}>
      <ListItemAvatar>
        <ListItemIcon>
          <MonetizationOnIcon
            fontSize="medium"
            className={transaction.amount > 0 ? classes.colorb : classes.colora}
          />
        </ListItemIcon>
      </ListItemAvatar>
      <ListItemText
        primary={transaction.description}
        secondary={transaction.amount}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return (
    <div className={classes.demo}>
      <List dense={true}>{genrateList}</List>
    </div>
  );
}
