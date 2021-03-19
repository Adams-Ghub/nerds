import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./src/screens/shopOwner/DashboardScreen";
import DrawerItem from "./src/components/DrawerItem";
import CustomProgress from "./src/components/CustomProgress";
import ShopOwnerProfileScreen from "./src/screens/shopOwner/ShopOwnerProfileScreen";

const Drawer = createDrawerNavigator();
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
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "transparent",
          itemStyle: { marginVertical: 5 },
        }}
        drawerStyle={{
          backgroundColor: "#000A14",
          width: 200,
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: () => {
              return <DrawerItem title="Dashboard" />;
            },
            ...defaultHeaderStyle,
          }}
          component={DashboardScreen}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: () => {
              return <DrawerItem title="Profile" />;
            },
            ...defaultHeaderStyle,
          }}
          component={ShopOwnerProfileScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
