import { createStore, applyMiddleware } from "redux";
// import { getFirestore, reduxFirestore } from "redux-firestore";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
// import firebase from "../firebase/firebase";
// import { getFirebase, reduxReactFirebase } from "react-redux-firebase";

const store = createStore(
  authReducer,
  applyMiddleware(thunk)
  // reduxFirestore(firebase),
  // reduxReactFirebase(firebase)
);
export default store;
