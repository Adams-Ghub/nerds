import firebase from "../../firebase/firebase";

export function createAccountShopOwner(
  email,
  password,
  username,
  role,
  shopName,
  contact,
  ghpostGps,
  idNumber
) {
  return async (dispatch, state, { getFirebase, getFirestore }) => {
    try {
      const user = await getFirebase()
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);

      let userInfo = getFirestore()
        .collection("users")
        .doc(user.user.uid)
        .set({
          username,
          role,
        })
        .then(() => {
          console.log(userInfo);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });

      getFirestore()
        .collection("shop")
        .doc(user.user.uid)
        .set({
          shopName,
          GH_Post_GPS: ghpostGps,
          contact,
          GhanaCardID: idNumber,
        })
        .then(() => {
          alert("Account created successfully");
        })
        .catch((error) => {
          alert(error.message);
        });
      console.log(user);
      dispatch(Loggedin(user, userInfo));
    } catch (error) {
      alert(error.message);
      dispatch(registerError(error.message));
    }
  };
}

export function createAccountCustomer(email, password, username, role) {
  return async (dispatch, state, { getFirebase, getFirestore }) => {
    try {
      const user = await getFirebase()
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);

      let userInfo = getFirestore()
        .collection("users")
        .doc(user.user.uid)
        .set({
          username,
          role,
        })
        .then(() => {
          alert("user created successfully");
          console.log(userInfo);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
      dispatch(Loggedin(user, userInfo));
    } catch (error) {
      alert(error.message);
      dispatch(registerError(error.message));
    }
  };
}

export function LoginUser(email, password) {
  return async (dispatch, state, { getFirebase, getFirestore }) => {
    try {
      const user = await getFirebase()
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);

      const data = await getFirestore()
        .collection("users")
        .doc(user.user.uid)
        .get();
      var userInfo = data.data();
      console.log(userInfo);
      dispatch(Loggedin(user));
      dispatch(LoggedinUserInfo(userInfo));
    } catch (error) {
      dispatch(loginError(error.message));
      console.log(error.message);
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

export function AddNewProduct(product) {
  return async (dispatch, state, { getFirestore, getFirebase }) => {
    await getFirestore()
      .collection("products")
      .add({
        productName: product.productName,
        cp: product.cp,
        sp: product.sp,
        details: product.details,
        qty: product.qty,
        base64: product.base64,
      })
      .then((docRef) => {
        alert("product added successfully");
        console.log(docRef.id);
        dispatch(productAdded(product));
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
}

export const getAllProducts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("products")
      .onSnapshot(
        (snapshot) => {
          var products = [];
          snapshot.forEach((doc) => {
            products.push(doc.data());
          });
          console.log(products);
          dispatch({
            type: "SET_ALL_PRODUCTS",
            payload: products,
          });
        },

        (error) => {}
      );
  };
};

export function Loggedin(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}
export function LoggedinUserInfo(userInfo) {
  return {
    type: "LOGGED_IN_USER_INFO",
    payload: userInfo,
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

export function productAdded(product) {
  return {
    type: "ADDED_NEW_PRODUCT",
    payload: product,
  };
}

//ALL CARTS RELATED ACTIONS==================================================
export function addProductToCart(item) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: item,
  };
}
export function increaseProduct(item) {
  return {
    type: "INCREASE_PRODUCT",
    payload: item,
  };
}

export function decreaseProduct(item) {
  return {
    type: "DECREASE_PRODUCT",
    payload: item,
  };
}
export function removeProduct(item) {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
}
