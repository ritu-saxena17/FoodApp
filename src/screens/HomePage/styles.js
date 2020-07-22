import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  components: {
    width: "20%",
    height: "300px",
    display: "inline-block",
    backgroundSize: "cover",
    backfaceVisibility: "visible",
    marginTop: "20px",
    alignItems: "center",

    display: "flex",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    paddingLeft: "80%",
  },
  text: {
    fontSize: "68px",
    textAlign: "center",
    paddingTop: "10%",
    color: "white",
  },
  text1: {
    fontSize: "20px",
    paddingRight: "20px",
    color: "white",
  },
  button: {
    variant: "contained",
    color: "secondary",
  },
}));
