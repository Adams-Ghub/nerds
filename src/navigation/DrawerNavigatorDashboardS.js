import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItem from "../components/DrawerItem";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
import DashboardScreen from "../screens/shopOwner/DashboardScreen";
import ShopOwnerProfileScreen from "../screens/shopOwner/ShopOwnerProfileScreen";
import OrdersScreen from "../screens/shopOwner/OrdersScreen";
import ShopOwnerOrderDetailsScreen from "../screens/shopOwner/ShopOwnerOrderDetailsScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loader from "../components/Loader";
import Product from "../components/ProductComponent";

const defaultHeaderStyle = {
  headerTitle: "",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#000A14",
  },
};
const Drawer = createDrawerNavigator();
function DrawerNavigatorDashboardS() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "transparent",
        itemStyle: { marginVertical: 5 },
      }}
      drawerStyle={{
        backgroundColor: "#000A14",
        width: 170,
        marginTop: 64,
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
            return (
              <DrawerItem
                title="Profile"
                icon={<AntDesign name="user" size={24} color="#0080FF" />}
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
        name="Orders"
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
        component={OrdersScreen}
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
