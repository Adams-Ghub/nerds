import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import OrderSearch from "../../components/OrderSearch";
import OrderItem from "../../components/OrderItem";
import DrawerItem from "../../components/DrawerItem";
import ShopOwnerOrderDetailsScreen from "./ShopOwnerOrderDetailsScreen";

const OrdersScreen = ({ navigation }) => {
  const orders = [
    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },

    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/ladies_bag.jpg"),
      topText: "Gucci Bag",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
  ];
  return (
    <View style={styles.container}>
      <OrderSearch />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OrderDetails");
              }}
            >
              <OrderItem
                image={item.image}
                topText={item.topText}
                downText={item.downText}
                rightText={item.rightText}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
