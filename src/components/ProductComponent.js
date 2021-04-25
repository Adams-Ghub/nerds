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
              source={require("../../assets/ladies_bag.jpg")}
            />
          </View>
          <View style={style.details}>
            <Text style={style.productName}>{this.props.name}</Text>
            <Text style={style.productPrice}>GHS 1800</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "column",
    // justifyContent: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 250,
    borderColor: "#080809",
    paddingLeft: 12,
  },
  productContainer: {
    flex: 1,
    width: wp("45%"),
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  details: {
    // backgroundColor: "rgba(165, 161, 157, 0.4)",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    paddingVertical: 10,
    borderColor: "#EEEEEE",
    borderWidth: 1,
  },
  productImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  productName: {
    fontSize: 17,
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("0.5%"),
    color: "#080809",
  },
  productPrice: {
    fontSize: 15,
    // fontWeight: "700",
    color: "#080809",
  },
});

export default Product;
