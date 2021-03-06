import React, { Component } from "react";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import DrawerNavigatorDashboardAdmin from "../navigation/DrawerNavigatorDashboardAdmin";
import { View, TouchableOpacity, Text } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import MobileNumberScreen from "../screens/customerMomoPayment/MobileNumberScreen";
import SuccessScreen from "../screens/customerMomoPayment/SuccessScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // activeColor="red"
      // inactiveColor="white"
      // activeBackgroundColor="green"
      // inactiveBackgroundColor="green"
      // style={{ backgroundColor: "#080809" }}
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: "#080809",
          // borderRadius: 10,
          // marginHorizontal: 7,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="home" color={"#ffffff"} size={25} />
          ),
        }}
        component={WelcomeScreen}
      />
      <Tab.Screen
        name="Categories"
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="grid-outline" color={"#ffffff"} size={25} />
          ),
        }}
        component={WelcomeScreen}
      />
      <Tab.Screen
        name="Register"
        initialParams={{ userType: "customer" }}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="person-outline" color={"#ffffff"} size={25} />
          ),
        }}
        component={RegisterScreenS}
      />
    </Tab.Navigator>
  );
}

class MainNavigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        {this.props.auth.Login &&
        this.props.auth.userInfo.role === "customer" ? (
          <Stack.Navigator>
            <Stack.Screen
              name="CustomerDashboard"
              options={{ header: () => {} }}
              component={DrawerNavigatorDashboardCustomer}
            />
            {/* <Stack.Screen
              name="ProductDetails"
              options={{
                headerTitleAlign: "center",
                headerTitle: "Product details",
                headerLeft: () => {
                  return (
                    <TouchableOpacity style={{ marginHorizontal: 15 }}>
                      <AntDesign name="arrowleft" size={24} color="#ffffff" />
                    </TouchableOpacity>
                  );
                },

                headerRight: () => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                     
                      <TouchableOpacity style={{ marginRight: 5 }}>
                        <MaterialCommunityIcons
                          name="cart"
                          size={24}
                          color="#ffffff"
                        />
                      </TouchableOpacity>
                      <View>
                        <Text style={{ color: "#fff", marginRight: 15 }}>
                          {"0 item(s)"}
                        </Text>
                      </View>
                    </View>
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
            /> */}
            <Stack.Screen
              name="Cart"
              options={{
                headerBackTitle: "",
                headerTitleStyle: {
                  color: "#ffffff",
                },
                headerStyle: {
                  backgroundColor: "#000000",
                },
              }}
              component={CartScreen}
            />
            <Stack.Screen
              name="CheckoutDelivery"
              options={{
                title: "Checkout",
                headerBackTitle: "",
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
                headerBackTitle: "",
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
                headerBackTitle: "",
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
              name="MobileNumber"
              options={{
                title: "MTN Mobile Money Payment",
                headerBackTitle: "",
                headerTintColor: "#fff",
                headerTitleAlign: "left",
                headerStyle: {
                  backgroundColor: "#000000",
                  shadowColor: "transparent",
                },
              }}
              component={MobileNumberScreen}
            />

            <Stack.Screen
              name="paymentSuccessful"
              options={{
                title: "Payment Details",
                headerBackTitle: "",
                headerTintColor: "#fff",
                headerTitleAlign: "left",
                headerStyle: {
                  backgroundColor: "#000000",
                  shadowColor: "transparent",
                },
              }}
              component={SuccessScreen}
            />
          </Stack.Navigator>
        ) : this.props.auth.Login &&
          this.props.auth.userInfo.role === "shop Owner" ? (
          <Stack.Navigator>
            <Stack.Screen
              name="ShopOwnerDashboard"
              options={{ header: () => {} }}
              component={DrawerNavigatorDashboardS}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="UserSelection">
            <Stack.Screen
              name="UserSelection"
              options={{ header: () => {} }}
              component={UserSelectionScreen}
            />

            <Stack.Screen
              name="Welcome"
              options={{ header: () => {} }}
              component={MyTabs}
            />

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
              name="ProductDetails"
              options={{
                headerTitleAlign: "center",
                headerTitle: "Product details",
                headerLeft: () => {
                  return (
                    <TouchableOpacity style={{ marginHorizontal: 15 }}>
                      <AntDesign name="arrowleft" size={24} color="#ffffff" />
                    </TouchableOpacity>
                  );
                },

                headerRight: () => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      {/* <TouchableOpacity style={{ marginRight: 15 }}>
                      <FontAwesome5 name="search" size={20} color="#ffffff" />
                    </TouchableOpacity> */}
                      <TouchableOpacity style={{ marginRight: 5 }}>
                        <MaterialCommunityIcons
                          name="cart"
                          size={24}
                          color="#ffffff"
                        />
                      </TouchableOpacity>
                      <View>
                        <Text style={{ color: "#fff", marginRight: 15 }}>
                          {"0 item(s)"}
                        </Text>
                      </View>
                    </View>
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
              options={{
                headerBackTitle: "",
                headerTitleStyle: {
                  color: "#ffffff",
                },
                headerStyle: {
                  backgroundColor: "#000000",
                },
              }}
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
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state,
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
