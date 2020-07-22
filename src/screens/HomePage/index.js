import React from "react";
import coverPhoto from "../../image/coverPhoto.jpg";
import fireSettings from "../../config/firebase";
import { useStyles } from "./styles";
import { globalStyles } from "./../../utils/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import TextFields from "./../../screens/Components/TextField/index";
import DivData from "./../../utils/index";
import Items from "./../../screens/IndividualItems/index";

//4 components - Types of meals
function RenderMenu() {
  const classes = useStyles();
  return DivData.map(function (item, index) {
    return (
      <Card
        key={index}
        className={clsx(globalStyles.card)}
        style={{
          paddingLeft: item.leftAlign,
        }}
        // onClick={() => Items(item.name)}
      >
        <CardMedia
          className={clsx(globalStyles.media)}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
        <CardContent>
          <Typography>{item.name}</Typography>
        </CardContent>
      </Card>
    );
  });
}

//for login and signup
async function OnClickAction(email, password, confirmPassword, history) {
  await fireSettings.auth();
  if (confirmPassword) {
    if (confirmPassword == password) {
      console.log("sign up");
      console.log(email);
      await fireSettings
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } else {
    await fireSettings
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        history.push({
          pathname: "/items",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function Home() {
  const globalClasses = globalStyles();
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleClickOpen = (action) => {
    setOpen(true);
    setClick(action);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={clsx(globalClasses.scroll)}>
      <div
        className={clsx(globalClasses.div1)}
        style={{
          backgroundImage: `url(${coverPhoto})`,
          backgroundSize: "cover",
          backfaceVisibility: "visible",
        }}
      >
        <div className={clsx(classes.row)}>
          <h2
            className={clsx(classes.text1)}
            onClick={() => handleClickOpen("Login")}
          >
            Login
          </h2>
          <h2
            className={clsx(classes.text1)}
            onClick={() => handleClickOpen("Signup")}
          >
            Signup
          </h2>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{click}</DialogTitle>
            <DialogContent>
              <TextFields
                name="Email Address"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <TextFields
                name="Password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {click == "Signup" ? (
                <TextFields
                  name="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
              ) : null}
            </DialogContent>
            <DialogActions>
              <Button
                className={clsx(classes.button)}
                onClick={() => {
                  OnClickAction(email, password, confirmPassword, history);
                }}
              >
                {click}
              </Button>
            </DialogActions>
          </Dialog>
          ;
        </div>
        <h2 className={clsx(classes.text)}>zomato</h2>
      </div>
      <div className={clsx(globalClasses.div3)}>
        <RenderMenu />
      </div>
    </div>
  );
}
export default Home;
