import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import clsx from "clsx";
function Buttonn(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      className={clsx(classes.button)}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
}

export default Buttonn;
