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
              source={{ uri: this.props.image }}
            />
          </View>
          <View style={style.productNamePricingContainer}>
            <Text numberOfLines={1} style={style.productName}>
              {this.props.name}
            </Text>
            <Text style={style.productPrice}>GH¢ {this.props.sp}</Text>

          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "column",
    justifyContent: "center",

  },
  productContainer: {
    flex: 1,
    height: hp("22%"),
    width: wp("38%"),
    backgroundColor: "#ffffff",
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
  productImageContainer: {
    flex: 7,
    marginBottom: 20,
    width: 160,
    height: 150,
  },
  productNamePricingContainer: {
    flex: 3,
    marginTop: hp("6%"),
  },
  productImage: {
    width: 160,
    height: 150,

  },
  productName: {
    fontSize: 15,
    paddingVertical: hp("0%"),
    paddingHorizontal: wp("0.5%"),
    color: "#080809",
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#080809",
  },
});

export default Product;
