import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import OrderSearch from "../../components/OrderSearch";
import OrderDetails from "../../components/OrderDetails";
import OrderItem from "../../components/OrderItem";

const OrdersScreen = () => {
  const orders = [
    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },

    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
      rightText: "2/5/22",
      downText: "GH¢3000",
    },
    {
      image: require("../../../assets/productImg.png"),
      topText: "HP Laptop",
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
            <TouchableOpacity onPress={() => {}}>
              <OrderItem
                image={item.image}
                topText={item.topText}
                downText={item.downText}
                rightText={item.rightText}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
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
