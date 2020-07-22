import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Buttonn from "../../../screens/Components/Button/index";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextFields from "../../../screens/Components/TextField/index";
function DialogBox(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.dname}</DialogTitle>
      <DialogContent>
        <input
          accept={props.accept}
          //   className={classes.input}
          //   id="contained-button-file"
          multiple
          type={props.type}
          onChange={props.onChange}
        />
        <TextFields
          name={props.dishname}
          type="text"
          value={props.dishnamevalue}
          onChange={props.setdishname}
        />
        <TextFields
          name={props.dishcost}
          type="text"
          value={props.dishcostvalue}
          onChange={props.setdishcost}
        />
        <TextFields
          name={props.dishdescription}
          type="text"
          value={props.dishdescriptionvalue}
          onChange={props.setdishdescription}
        />
        <TextFields
          name={props.restaurantname}
          type="text"
          value={props.restaurantnamevalue}
          onChange={props.setrestaurantname}
        />
      </DialogContent>
      <DialogActions>
        <Buttonn onClick={props.onClick} name={props.name} />
      </DialogActions>
      <DialogActions></DialogActions>
    </Dialog>
  );
}

export default DialogBox;
