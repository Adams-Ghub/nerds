import React from "react";
import { StyleSheet, View, Text } from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import DashboardScreen from "./src/screens/shopOwner/DashboardScreen";
// import DrawerItem from "./src/components/DrawerItem";
// import CustomProgress from "./src/components/CustomProgress";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
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
