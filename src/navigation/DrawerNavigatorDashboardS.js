import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItem from "../components/DrawerItem";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
import DashboardScreen from "../screens/shopOwner/DashboardScreen";
import ShopOwnerProfileScreen from "../screens/shopOwner/ShopOwnerProfileScreen";
import OrdersScreen from "../screens/shopOwner/OrdersScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ShopOwnerOrderDetailsScreen from "../screens/shopOwner/ShopOwnerOrderDetailsScreen";
import Loader from "../components/Loader";
import Product from "../components/ProductComponent";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const defaultHeaderStyle = {
  headerTitle: "",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#000A14",
  },
};
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function OrderNavigatior() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Orders"
    >
      <Stack.Screen
        name="OrderDetails"
        // options={{ header: () => {} }}
        component={ShopOwnerOrderDetailsScreen}
      />

      <Stack.Screen
        name="Orders"
        // options={{ header: () => {} }}
        component={OrdersScreen}
      />
    </Stack.Navigator>
  );
}
function DrawerNavigatorDashboardS() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "transparent",
        itemStyle: { marginVertical: hp("0.01%") },
      }}
      screenOptions={({ navigation }) => {
        return {
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
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
                    style={{
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: 17,
                    }}
                  >
                    Adams
                  </Text>
                </View>
              </View>
            );
          },
        };
      }}
      drawerStyle={{
        backgroundColor: "#000A14",

        //         width: 170,
        //         marginTop: 64,

        width: wp("45%"),
        marginTop: hp("10.95%"),
      }}
    >
      <Drawer.Screen
        name="Dashboard"
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
            return (
              <DrawerItem
                title="Profile"
                icon={
                  <AntDesign name="user" size={24} color="#0080FF" />

                  // icon={<AntDesign name="user" size={24} color="#0080FF" />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={ShopOwnerProfileScreen}
      />
      {/* <Drawer.Screen
        name="Products"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Profile"
                icon={<AntDesign name="gift" size={24} color="#0080FF" />}
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={ShopOwnerProfileScreen}
      /> */}

      <Drawer.Screen
        name="OrderNavigatior"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Orders"
                icon={
                  <AntDesign name="shoppingcart" size={24} color="#0080FF" />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={OrderNavigatior}
      />

      <Drawer.Screen
        name="Log out"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Log out"
                icon={<AntDesign name="logout" size={24} color="#0080FF" />}
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
export default DrawerNavigatorDashboardS;
