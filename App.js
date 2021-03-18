import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigatorDashboardS from "./src/navigation/DrawerNavigatorDashboardS";
import LoginScreen from "./src/screens/LoginScreen";
import UserSelectionScreen from "./src/screens/UserSelectionScreen";
import RegisterScreenS from "./src/screens/RegisterScreenS";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();
const defaultHeaderStyle = {
  headerTitle: "",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#000A14",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={UserSelectionScreen} />
        <Stack.Screen
          name="ShopOwnerDashboard"
          component={DrawerNavigatorDashboardS}
        />
        <Stack.Screen
          options={{ header: () => {} }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ header: () => {} }}
          name="RegisterS"
          component={RegisterScreenS}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
