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
import CheckoutDeliveryScreen from "../screens/customer/CheckoutDeliveryScreen";
import CheckoutSummaryScreen from "../screens/customer/CheckoutSummaryScreen";
import CheckoutPaymentScreen from "../screens/customer/CheckoutPaymentScreen";
import PLReportListElement from "../components/PLReportListElement";
import PLReport from "../components/PLReport";
import { connect } from "react-redux";
import EditProfile from "../components/EditProfile";
import ProductDetails from "../components/ProductDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="md-cart" color={tintColor} size={25} />
          ),
        }}
        component={WelcomeScreen}
      />
      <Tab.Screen
        name="Categories"
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="grid-outline" color={tintColor} size={25} />
          ),
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name="Register"
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="person-outline" color={tintColor} size={25} />
          ),
        }}
        component={RegisterScreenS}
      />
    </Tab.Navigator>
  );
}

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
        <Stack.Navigator initialRouteName="UserSelectionScreen">
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
            name="CheckoutDelivery"
            options={{
              title: "Checkout",

              headerTintColor: "#fff",
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#000000",
                shadowColor: "transparent",
              },
            }}
            component={CheckoutDeliveryScreen}
          />
          <Stack.Screen
            name="CheckoutSummary"
            options={{
              title: "Checkout",

              headerTintColor: "#fff",
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#000000",
                shadowColor: "transparent",
              },
            }}
            component={CheckoutSummaryScreen}
          />

          <Stack.Screen
            name="CheckoutPayment"
            options={{
              title: "Checkout",

              headerTintColor: "#fff",
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#000000",
                shadowColor: "transparent",
              },
            }}
            component={CheckoutPaymentScreen}
          />

          <Stack.Screen
            name="ProductDetails"
            options={{}}
            component={ProductDetails}
          />
          <Stack.Screen
            name="Cart"
            options={{ header: () => {} }}
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
            component={MyTabs}
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
