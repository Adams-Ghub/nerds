import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.productContainer}>
          <View style={style.productImageContainer}>
            <Image
              style={style.productImage}
              source={require("../../assets/productImg.png")}
            />
          </View>
          <Text style={style.productName}>{this.props.name}</Text>
          <Text style={style.productPrice}>GHS 1800</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#F8F8F8",

    flexDirection: "column",
  },
  productContainer: {
    height: 120,
    width: 150,

    marginHorizontal: wp("1%"),
    marginVertical: hp("1%"),
  },
  productImage: {
    width: 150,
    height: 120,
  },
  productImageContainer: {},
  productName: { fontSize: 17 },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export default Product;
