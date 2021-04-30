import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
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
import MobileNumberScreen from "../screens/customerMomoPayment/MobileNumberScreen";
import { logout } from "../redux/actions/authAction";

const defaultHeaderStyle = {
  headerTitle: "",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#000A14",
  },
};
const Drawer = createDrawerNavigator();
function DrawerNavigatorDashboardCustomer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "transparent",
        itemStyle: { marginVertical: 10 },
      }}
      screenOptions={({ navigation }) => {
        return {
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 27 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <Entypo name="menu" size={26} color="#ffffff" />
              </TouchableOpacity>
            );
          },
          // headerRight: () => {
          //   return (
          //     <View style={{ flexDirection: "row", marginRight: wp("4%") }}>
          //       <Image
          //         style={{
          //           width: wp("10%"),
          //           height: hp("5%"),
          //           marginRight: wp("2%"),
          //           borderRadius: 25,
          //         }}
          //         source={require("../../assets/contact.jpg")}
          //       />
          //       <View>
          //         <Text style={{ color: "#ffffff" }}>Welcome,</Text>
          //         <Text
          //           style={{
          //             color: "#ffffff",
          //             fontWeight: "700",
          //             fontSize: 17,
          //           }}
          //         >
          //           Adams
          //         </Text>
          //       </View>
          //     </View>
          //   );
          // },
        };
      }}
      drawerStyle={{
        backgroundColor: "##000A14",
        width: 180,
        marginTop: 64.2,
      }}
    >
      <Drawer.Screen
        name="shopping"
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
                    color="#ffffff"
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
                    color="#ffffff"
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
                    color="#ffffff"
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={MobileNumberScreen}
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
                    color="#ffffff"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={logout}
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
                    color="#ffffff"
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
