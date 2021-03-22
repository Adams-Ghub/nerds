import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const OrderItem = ({ image, topText, downText, rightText }) => {
  return (
    <View style={styles.orders}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.product}>
        <Text style={styles.productName}>{topText} </Text>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.productDate}>{downText} </Text>
          <Text style={styles.productPrice}>{rightText} </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {},
  orders: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  image: {
    height: 80,
    width: 80,
  },
  productName: {
    fontSize: 20,
  },
  productDate: {
    fontSize: 20,
  },
  productPrice: {
    fontSize: 20,
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  product: {
    flex: 0.75,
    height: 100,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  imageContainer: {
    flex: 0.25,
  },
});
