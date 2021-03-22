import firebase, { db } from "../../firebase/firebase";

export function createAccountShopOwner(email, password, username) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);

      let f_user = db
        .collection("users")
        .doc(user.user.uid)
        .set({
          username,
          role: "Shop Owner",
        })
        .then((res) => {
          alert("user created successfully", res);
          console.log(f_user);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
      console.log(user);
      dispatch(Loggedin(user));
    } catch (error) {
      alert(error.message);
      dispatch(registerError(error.message));
    }
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
      dispatch(Loggedin(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(Loggedout());
    } catch (error) {
      console.log(error);
    }
  };
}

export function Loggedin(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}
export function Loggedout() {
  return {
    type: "LOGGED_OUT",
  };
}

export function registerError(error) {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
}
export function loginError(error) {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
}
