import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerItem from "../components/DrawerItem";
import { Header } from "react-native/Libraries/NewAppScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DashboardScreen from "../screens/shopOwner/DashboardScreen";
import ShopOwnerProfileScreen from "../screens/shopOwner/ShopOwnerProfileScreen";
import OrdersScreen from "../screens/shopOwner/OrdersScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Loader from "../components/Loader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ProfileCustomerDashboard from "../components/ProfileCustomerDashboard";

const defaultHeaderStyle = {
  headerTitle: "",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#000A14",
  },
};
const Drawer = createDrawerNavigator();
function DrawerNavigatorDashboardCustomer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "transparent",
        itemStyle: { marginVertical: hp("0.01%") },
      }}
      screenOptions={{
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                Drawer.navigation.toggle();
              }}
            >
              <Entypo name="menu" size={24} color="#ffffff" />
            </TouchableOpacity>
          );
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row", marginRight: wp("4%") }}>
              <Image
                style={{
                  width: wp("10%"),
                  height: hp("5%"),
                  marginRight: wp("2%"),
                  borderRadius: 25,
                }}
                source={require("../../assets/contact.jpg")}
              />
              <View>
                <Text style={{ color: "#ffffff" }}>Welcome,</Text>
                <Text
                  style={{ color: "#ffffff", fontWeight: "700", fontSize: 17 }}
                >
                  Adams
                </Text>
              </View>
            </View>
          );
        },
      }}
      drawerStyle={{
        backgroundColor: "#000A14",
        width: wp("45%"),
        marginTop: hp("10.95%"),
      }}
    >
      <Drawer.Screen
        name="shop"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="shopping"
                icon={
                  <AntDesign
                    style={{ marginTop: 5 }}
                    name="shoppingcart"
                    size={20}
                    color="#0080FF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={WelcomeScreen}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="profile"
                icon={
                  <AntDesign
                    name="user"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#0080FF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={ProfileCustomerDashboard}
      />
      <Drawer.Screen
        name="payment"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="payment"
                icon={
                  <MaterialIcons
                    name="payment"
                    size={20}
                    style={{ marginTop: 5 }}
                    color="#0080ff"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={OrdersScreen}
      />

      <Drawer.Screen
        name="complaint"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="complaint"
                icon={
                  <Entypo
                    name="documents"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#0080ff"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={OrdersScreen}
      />

      <Drawer.Screen
        name="Log out"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="log out"
                icon={
                  <AntDesign
                    name="logout"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#0080FF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={Loader}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigatorDashboardCustomer;
