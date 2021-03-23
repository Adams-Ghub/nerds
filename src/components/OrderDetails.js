import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import OrderItem from "./OrderItem";

const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <OrderItem
        image={require("../../assets/productImg.png")}
        topText="Omen Laptop"
        downText="2/5/22"
        rightText="GH¢2000"
      />

      <OrderItem
        image={require("../../assets/productImg.png")}
        topText="HP Laptop"
        downText="2/5/22"
        rightText="GH¢3000"
      />

      <OrderItem
        image={require("../../assets/productImg.png")}
        topText="DELL Laptop"
        downText="2/5/22"
        rightText="GH¢2500"
      />

      <OrderItem
        image={require("../../assets/productImg.png")}
        topText="LENOVA Laptop"
        downText="2/5/22"
        rightText="GH¢1800"
      />
      
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
