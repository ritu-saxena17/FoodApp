import * as firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBXL8TMRj6VSlkvBiexOmoIK3gGetvu9eI",
  authDomain: "first-app-54fb0.firebaseapp.com",
  databaseURL: "https://first-app-54fb0.firebaseio.com",
  projectId: "first-app-54fb0",
  storageBucket: "first-app-54fb0.appspot.com",
  messagingSenderId: "653501808123",
  appId: "1:653501808123:web:f70507b650467016d69f5e",
  measurementId: "G-7YWC9E9XM0",
};

const fireSettings = firebase.initializeApp(firebaseConfig);

export default fireSettings;
export const auth = firebase.auth();
