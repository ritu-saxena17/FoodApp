import React from "react";
import TextField from "@material-ui/core/TextField";

//textfields
function TextFields(props) {
  return (
    <TextField
      required
      label="Required"
      label={props.name}
      margin="dense"
      type={props.type}
      autoCorrect="false"
      onChange={props.onChange}
      fullWidth
    />
  );
}


export default TextFields;
