import { makeStyles } from "@material-ui/core/styles";

export const globalStyles = makeStyles((theme) => ({
  scroll: {
    overflowY: "scroll",
  },
  div1: {
    width: "100%",
    height: "560px",
    resizeMode: "cover",
  },
  div2: {
    width: "100%",
    height: "560px",
    //backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundRepeat: "no-repeat",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    maxWidth: "345",
    width: "60%",
    borderRadius: "20px !important",
  },
  div3: {
    flexDirection: "row",
    display: "flex",
    paddingTop: "3%",
    alignItems: "center",
  },
  grid: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
  },
}));
