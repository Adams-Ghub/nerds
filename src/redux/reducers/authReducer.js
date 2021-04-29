const initialState = {
  Login: false,
  user: null,
  userInfo: null,
  role: null,
  cart: [],
  error: {},
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        Login: true,
        user: action.payload,
        userInfo: action.userInfo,
      };
    // case "LOGGED_IN_USER_INFO":
    //   return {
    //     ...state,
    //     userInfo: action.payload,
    //   };
    case "LOGGED_OUT":
      return { ...state, Login: false, user: null, userInfo: null };

    case "REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };

    case "FS_REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };

    case "LOGIN_ERROR":
      return { ...state, error: { login: action.payload } };

    case "SET_ALL_PRODUCTS":
      return { ...state, products: action.payload };

    //ADDING TO CART SECTION
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "INCREASE_PRODUCT":
      let index = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      let newProduct = state.cart;
      newProduct[index] = action.payload;
      return { ...state, cart: newProduct };
    case "DECREASE_PRODUCT":
      let index2 = state.cart.findIndex(
        (item2) => item2.product.id === action.payload.product.id
      );
      let newProduct2 = state.cart;
      newProduct2[index2] = action.payload;

      return { ...state, cart: newProduct2 };

    case "REMOVE_FROM_CART":
      let currentProducts = state.cart.filter((item) => {
        return item.product.id !== action.payload;
      });
      return { ...state, cart: currentProducts };

    default:
      return state;
  }
};
