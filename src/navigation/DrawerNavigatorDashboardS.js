import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItem from "../components/DrawerItem";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
import DashboardScreen from "../screens/shopOwner/DashboardScreen";

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
        marginTop: 89,
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                title="Dashboard"
                icon={<AntDesign name="user" size={24} color="#0080FF" />}
              />
            );
          },
          ...defaultHeaderStyle,
        }}
        component={DashboardScreen}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigatorDashboardS;

{
  /* <Drawer.Navigator
  drawerContentOptions={{
    activeTintColor: "transparent",
    itemStyle: { marginVertical: 5 },
  }}
  drawerStyle={{
    backgroundColor: "#000A14",
    width: 200,
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
</Drawer.Navigator> */
}
