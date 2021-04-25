const initialState = {
  Login: false,
  user: null,
  role: null,
  error: {},
  products: [],
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, Login: true, user: action.payload };

    case "LOGGED_OUT":
      return { ...state, Login: false, user: null };

    case "REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };

    case "FS_REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };

    case "LOGIN_ERROR":
      return { ...state, error: { login: action.payload } };

    case "SET_ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_ALL_ORDERS":
      return { ...state, orders: action.payload };

    default:
      return state;
  }
};
