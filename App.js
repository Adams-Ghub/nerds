import React from "react";
import { StyleSheet, View, Text, LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  productsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
