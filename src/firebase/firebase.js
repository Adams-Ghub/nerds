import * as firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF29ejtMr46kz-JOvPF1QEyimPJM5L0Dk",
  authDomain: "nerds-37275.firebaseapp.com",
  projectId: "nerds-37275",
  storageBucket: "nerds-37275.appspot.com",
  messagingSenderId: "858418793389",
  appId: "1:858418793389:web:e2282e1278b722bcda2f24",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
