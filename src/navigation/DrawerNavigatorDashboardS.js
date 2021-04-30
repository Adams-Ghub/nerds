import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItem from "../components/DrawerItem";
import { Header } from "react-native/Libraries/NewAppScreen";
import DashboardScreen from "../screens/shopOwner/DashboardScreen";
import ShopOwnerProfileScreen from "../screens/shopOwner/ShopOwnerProfileScreen";
import OrdersScreen from "../screens/shopOwner/OrdersScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Entypo,
  Feather,
  Ionicons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import ShopOwnerOrderDetailsScreen from "../screens/shopOwner/ShopOwnerOrderDetailsScreen";
import Loader from "../components/Loader";
import { DrawerActions } from "@react-navigation/native";
import ProductScreen from "../screens/shopOwner/ProductScreen";
import Product from "../components/ProductComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddProductScreen from "../screens/shopOwner/AddProductScreen";
import EditProductScreen from "../screens/shopOwner/EditProductScreen";
import PLReport from "../components/PLReport";

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
function DrawerNavigatorDashboardS({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "transparent",
        itemStyle: { marginVertical: 3 },
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
          //         <Text style={{ color: "#F88017" }}>Welcome,</Text>
          //         <Text
          //           style={{
          //             color: "#F88017",
          //             fontWeight: "700",
          //             fontSize: 17,
          //           }}
          //         >
          //           Nerds
          //         </Text>
          //       </View>
          //     </View>
          //   );
          // },
        };
      }}
      drawerStyle={{
        backgroundColor: "#000A14",
        width: 180,
        marginTop: 52,
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Dashboard"
                icon={
                  <MaterialIcons
                    name="dashboard"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
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
                  <AntDesign
                    name="user"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
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
        name="products"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Products"
                icon={
                  <Feather
                    name="box"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={ProductScreen}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Orders"
                icon={
                  <AntDesign
                    name="shoppingcart"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={OrderNavigatior}
      />

      <Drawer.Screen
        name="customers"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Customers"
                icon={
                  <Feather
                    name="users"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={ProductScreen}
      />
      <Drawer.Screen
        name="report"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Report"
                icon={
                  <Entypo
                    name="text-document"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={PLReport}
      />

      {/* <Drawer.Screen
        name="reports"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Report"
                icon={
                  <Feather
                    name="package"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={PLReport}
      /> */}

      <Drawer.Screen
        name="Log out"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Log out"
                icon={
                  <AntDesign
                    name="logout"
                    style={{ marginTop: 5 }}
                    size={20}
                    color="#FFFFFF"
                  />
                }
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={Loader}
      />
      <Drawer.Screen name="EditProduct" component={EditProductScreen} />
      <Drawer.Screen name="AddProduct" component={AddProductScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigatorDashboardS;
