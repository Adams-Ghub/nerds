import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigatorDashboardS from "./DrawerNavigatorDashboardS";
import DrawerNavigatorDashboardCustomer from "./DrawerNavigatorDashboardCustomer";
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
import ProductDetails from "../components/ProductDetails";
import DrawerNavigatorDashboardAdmin from "../navigation/DrawerNavigatorDashboardAdmin";
import { View, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

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
        <Stack.Navigator initialRouteName="CustomerDashboard">
          <Stack.Screen
            name="Home"
            options={{ header: () => {} }}
            component={UserSelectionScreen}
          />
          <Stack.Screen
            name="AdminDashboard"
            options={{ header: () => {} }}
            component={DrawerNavigatorDashboardAdmin}
          />

          <Stack.Screen
            name="CustomerDashboard"
            options={{ header: () => {} }}
            component={DrawerNavigatorDashboardCustomer}
          />

          <Stack.Screen
            name="Order  Details"
            // options={{ header: () => {} }}
            component={ShopOwnerOrderDetailsScreen}
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
            options={{
              headerRight: () => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TouchableOpacity style={{ marginRight: 15 }}>
                      <FontAwesome5 name="search" size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 15 }}>
                      <MaterialCommunityIcons
                        name="cart"
                        size={24}
                        color="#ffffff"
                      />
                    </TouchableOpacity>
                  </View>
                );
              },
              headerTitleAlign: "center",
              headerTitle: "product details",
              headerLeft: () => {
                return (
                  <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <AntDesign name="arrowleft" size={24} color="#ffffff" />
                  </TouchableOpacity>
                );
              },
              headerTitleStyle: {
                color: "#ffffff",
              },
              headerStyle: {
                backgroundColor: "#000000",
              },
            }}
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
