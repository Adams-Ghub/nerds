import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigatorDashboardS from "./DrawerNavigatorDashboardS";
import LoginScreen from "../screens/LoginScreen";
import UserSelectionScreen from "../screens/UserSelectionScreen";
import RegisterScreenS from "../screens/RegisterScreenS";
import RegisterScreenC from "../screens/RegisterScreenC";
import RegisterShopScreen from "../screens/RegisterShopScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShopOwnerDashboard">
        <Stack.Screen
          name="Home"
          options={{ header: () => {} }}
          component={UserSelectionScreen}
        />
        <Stack.Screen
          name="ShopOwnerDashboard"
          options={{ header: () => {} }}
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
        <Stack.Screen
          options={{ header: () => {} }}
          name="RegisterShop"
          component={RegisterShopScreen}
        />
        <Stack.Screen
          options={{ header: () => {} }}
          name="RegisterC"
          component={RegisterScreenC}
        />
        <Stack.Screen
          options={{ header: () => {} }}
          name="Welcome"
          component={WelcomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
