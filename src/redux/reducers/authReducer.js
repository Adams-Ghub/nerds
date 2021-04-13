const initialState = {
  Login: false,
  user: null,
  role: null,
  error: {},
  products: [
    {
      productName: "Hp Omen Laptop",
      cp: "1800",
      sp: "2400",
      details: "HDD 1TB",
      base64: "",
      qty: "50",
    },
  ],
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

    default:
      return state;
  }
};
