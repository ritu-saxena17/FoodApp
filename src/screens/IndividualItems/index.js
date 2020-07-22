import React from "react";
import { useEffect } from "react";
import breakfastCover from "../../image/breakfastCover.jpeg";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { useLocation, withRouter } from "react-router-dom";
import { useStyles } from "./styles";
import { globalStyles } from "./../../utils/styles";
import Fab from "@material-ui/core/Fab";
import firebase from "firebase";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import clsx from "clsx";
import fireSettings from "../../config/firebase";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import DialogBox from "./../../screens/Components/Dialog/index";
import { useHistory } from "react-router-dom";
import Buttonn from "./../../screens/Components/Button/index";
import "firebase/storage";

function Items() {
  const globalClasses = globalStyles();
  const [open, setOpen] = React.useState(false);
  const [dish, setDish] = React.useState("");
  const [dishImage, setDishImage] = React.useState("");
  const [dishDescription, setDishDescription] = React.useState("");
  const [dishCost, setDishCost] = React.useState("");
  const [restaurantName, setRestaurantName] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");
  const [dishList, setDishList] = React.useState([]);
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    dataFromFirebase();
  }, []);

  const handleUploadClick = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setSelectedFile(image);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = (id) => {
    console.log("file is " + selectedFile);
    const uploadTask = fireSettings
      .storage()
      .ref("/breakfast/" + id)
      .put(selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const dataFromFirebase = async () => {
    const list = [];
    console.log("before list is " + list);
    console.log("dataFromFirebase");
    firebase
      .firestore()
      .collection("Dish")
      .onSnapshot(
        (snapshot) => {
          snapshot.forEach((doc) => {
            const {
              dishName,
              dishDescription,
              dishCost,
              resturauntName,
            } = doc.data();
            fireSettings
              .storage()
              .ref("/breakfast/")
              .child(doc.id)
              .getDownloadURL()
              .then((imageUrl) => {
                setDishImage(imageUrl);
                list.push({
                  id: doc.id,
                  dishName: dishName,
                  dishDescription: dishDescription,
                  dishImage: imageUrl,
                  dishCost: dishCost,
                  resturauntName: resturauntName,
                });
              });
            setDishList(list);
          });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const OnClickAction = async () => {
    console.log("onclick");
    const db = firebase.firestore();
    console.log("after onclick");
    try {
      db.collection("Dish")
        .add({
          dishName: dish,
          dishDescription: dishDescription,
          dishCost: dishCost,
          resturauntName: restaurantName,
        })
        .then((data) => {
          if (selectedFile != null) {
            handleUpload(data.id);
          }
          console.log("id is awesome", data.id);
          history.push({ pathname: `${data.id}` });
        });
    } catch (e) {
      console.log(e);
    }
  };

  const RenderView = () => {
    console.log("data is" + JSON.stringify(dishList));
    return dishList.map((item, index) => {
      return (
        <Grid item xs={3}>
          <Card
            key={index}
            className={clsx(globalStyles.card)}
            // style={{
            //   paddingLeft: item.leftAlign,
            // }}
            // onClick={() => Items(item.name)}
          >
            <CardHeader title={item.dishName} subheader={item.resturauntName} />
            <CardMedia
              className={clsx(globalStyles.media)}
              style={{ height: 0, paddingTop: "56.25%" }}
              image={item.dishImage}
            />
            <CardContent>
              <Typography>{item.dishDescription}</Typography>
              <h5>${item.dishCost}</h5>
            </CardContent>
            <CardActions>
              <Buttonn name="ADD" />
            </CardActions>
          </Card>
        </Grid>
        // </Grid>
      );
    });
  };

  return (
    <div className={clsx(globalClasses.scroll)}>
      <div
        className={clsx(globalClasses.div2)}
        style={{
          backgroundImage: `url(${breakfastCover})`,
          //   backgroundSize: "cover",
          backfaceVisibility: "visible",
        }}
      ></div>
      <div>
        {/* <Add /> */}
        <Buttonn name="Add Items" onClick={() => handleClickOpen()} />
        <DialogBox
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          dname="Add Items"
          name="Upload Data"
          onClick={() => {
            OnClickAction();
          }}
          accept="image/*"
          type="file"
          onChange={handleUploadClick}
          // <label htmlFor="contained-button-file">
          //     <Fab component="span" className={classes.cameraButton}>
          //       <AddPhotoAlternateIcon />
          //     </Fab>
          //   </label>
          dishname="Dish Name"
          dishnamevalue={dish}
          setdishname={(event) => {
            setDish(event.target.value);
          }}
          dishcost="Dish Cost"
          dishcostvalue={dishCost}
          setdishcost={(event) => {
            setDishCost(event.target.value);
          }}
          dishdescription="Dish Description"
          dishdescriptionvalue={dishDescription}
          setdishdescription={(event) => {
            setDishDescription(event.target.value);
          }}
          restaurantname="Restaurant Name"
          restaurantnamevalue={dishDescription}
          setrestaurantname={(event) => {
            setRestaurantName(event.target.value);
          }}
        />
        <div className={clsx(globalClasses.div3)}>
          <Grid className={clsx(globalStyles.grid)} container spacing={3}>
            <RenderView />
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default Items;
