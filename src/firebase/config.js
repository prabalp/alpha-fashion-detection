import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC-zTF02Mh-AnTJcSgt4GXFVcYqzdGpE_w",
  authDomain: "fashion-detection-1f3f2.firebaseapp.com",
  databaseURL:
    "https://fashion-detection-1f3f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fashion-detection-1f3f2",
  storageBucket: "fashion-detection-1f3f2.appspot.com",
  messagingSenderId: "1068423481244",
  appId: "1:1068423481244:web:98c9c5641c015b20386a59",
  measurementId: "G-BXLNE31TSK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
