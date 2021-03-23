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
    marginHorizontal: wp("0.5%"),
    marginVertical: wp("0.5%"),
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: hp("24%"),
    maxWidth: wp("47%"),
  },
  productContainer: {
    height: hp("20%"),
    width: wp("40%"),
    backgroundColor: "#FFFFFF",
    marginHorizontal: wp("5%"),
    marginVertical: hp("5%"),
  },
  productImage: {
    width: 150,
    height: 120,
  },

  productName: {
    fontSize: 17,
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("0.5%"),
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export default Product;
