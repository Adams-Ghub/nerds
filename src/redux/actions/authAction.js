// import firebase from "../../firebase/firebase";

// export function createAccountShopOwner(
//   email,
//   password,
//   username,
//   shopName,
//   contact,
//   ghpostGps,
//   idNumber
// ) {
//   const db = firebase.firestore();
//   return async (dispatch) => {
//     try {
//       const user = await firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password);
//       console.log(user);

//       let f_user = db
//         .collection("users")
//         .doc(user.user.uid)
//         .set({
//           username,
//           role: "Shop Owner",
//         })
//         .then(() => {
//           alert("user created successfully");
//           console.log(f_user);
//         })
//         .catch((error) => {
//           alert(error.message);
//           console.log(error);
//         });

//       db.collection("shop")
//         .doc(user.user.uid)
//         .set({
//           shopName,
//           GH_Post_GPS: ghpostGps,
//           contact,
//           GhanaCardID: idNumber,
//         })
//         .then(() => {
//           alert("Shop created successfully");
//         })
//         .catch((error) => {
//           alert(error.message);
//         });
//       console.log(user);
//       // dispatch(Loggedin(user));
//     } catch (error) {
//       alert(error.message);
//       dispatch(registerError(error.message));
//     }
//   };
// }

// export function LoginShopOwner(email, password) {
//   return async (dispatch) => {
//     try {
//       const user = await firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password);
//       console.log(user);
//       dispatch(Loggedin(user));
//     } catch (error) {
//       dispatch(loginError(error.message));
//       console.log(error.message);
//     }
//   };
// }

// export function logout() {
//   return async (dispatch) => {
//     try {
//       await firebase.auth().signOut();
//       dispatch(Loggedout());
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

export function AddNewProduct(product) {
  return async (dispatch, state, { getFirestore }) => {
    await getFirestore()
      .collection("products")
      .add({
        productName: product.productName,
        cp: product.cp,
        sp: product.sp,
        details: product.details,
        qty: product.qty,
        base64: product.base64,
        id: product.id,
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

export const getAllOrders = () => {
  return async (dispatch, state, { getFirestore }) => {
    await getFirestore()
      .collection("orders")
      .onSnapshot(
        (snapshot) => {
          var orders = [];
          snapshot.forEach((doc) => {
            orders.push(doc.data());
          });
          console.log(orders);
          dispatch({
            type: "SET_ALL_ORDERS",
            payload: orders,
          });
        },

        (error) => {
          console.log(error.message);
        }
      );
  };
};

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

export function productAdded(product) {
  return {
    type: "ADDED_NEW_PRODUCT",
    payload: product,
  };
}
