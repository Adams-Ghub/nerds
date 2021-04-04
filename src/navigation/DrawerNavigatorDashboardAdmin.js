import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerItem from "../components/DrawerItem";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
import DashboardScreen from "../screens/shopOwner/DashboardScreen";
import ShopOwnerProfileScreen from "../screens/shopOwner/ShopOwnerProfileScreen";
import OrdersScreen from "../screens/shopOwner/OrdersScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import ShopOwnerOrderDetailsScreen from "../screens/shopOwner/ShopOwnerOrderDetailsScreen";

import Loader from "../components/Loader";
import Product from "../components/ProductComponent";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { NavigationContainer } from "@react-navigation/native";

const defaultHeaderStyle = {
  headerTitle: "",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#000A14",
  },
};
const Drawer = createDrawerNavigator();
function DrawerNavigatorDashboardAdmin() {
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
        name="Home"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                icon={
                  <Fontisto
                    name="shopping-store"
                    style={{ marginTop: 7 }}
                    size={16}
                    color="#0080ff"
                  />
                }
                title="shops"
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={DashboardScreen}
      />
      <Drawer.Screen
        name="users"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="users"
                icon={
                  <FontAwesome5
                    name="user-friends"
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
        component={ShopOwnerProfileScreen}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="profile"
                icon={
                  <FontAwesome5
                    style={{ marginTop: 4 }}
                    name="user"
                    size={20}
                    color="#0080FF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={ShopOwnerProfileScreen}
      />

      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="transaction"
                icon={
                  <Entypo
                    style={{ marginTop: 5 }}
                    name="text-document"
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
                    style={{ marginTop: 4 }}
                    name="logout"
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
export default DrawerNavigatorDashboardAdmin;
