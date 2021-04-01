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

import ShopOwnerOrderDetailsScreen from "../screens/shopOwner/ShopOwnerOrderDetailsScreen";
import CartScreen from "../screens/customer/CartScreen";

import PLReportListElement from "../components/PLReportListElement";
import PLReport from "../components/PLReport";
import { connect } from "react-redux";
import EditProfile from "../components/EditProfile";
import ProductDetails from "../components/ProductDetails";

const Stack = createStackNavigator();

function MainNavigator({ auth }) {
  return (
    <NavigationContainer>
      {auth.Login ? (
        <Stack.Navigator>
          <Stack.Screen
            name="ShopOwnerDashboard"
            options={{ header: () => {} }}
            component={DrawerNavigatorDashboardS}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="ProductDetails">
          <Stack.Screen
            name="Home"
            options={{ header: () => {} }}
            component={UserSelectionScreen}
          />
          <Stack.Screen
            name="ProductDetails"
            options={{ header: () => {} }}
            component={ProductDetails}
          />
          <Stack.Screen
            name="Cart"
            // options={{ header: () => {} }}
            component={CartScreen}
          />
          <Stack.Screen
            options={{ header: () => {} }}
            name="PLReport"
            component={PLReport}
          />
          <Stack.Screen
            options={{ header: () => {} }}
            name="PLReportListElement"
            component={PLReportListElement}
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
      )}
    </NavigationContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
