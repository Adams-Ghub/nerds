import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

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
          <View style={style.details}>
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
    marginVertical: 5,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 250,
    borderColor: "#080809",
    left: 25,
  },
  productContainer: {
    flex: 1,
    width: 170,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    marginHorizontal: 5,
  },
  productImageContainer: {
    flex: 7,
    marginBottom: 20,
    width: 160,
    height: 150,
    marginTop: 10,
    marginLeft: 10,
  },
  details: {
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    paddingVertical: 10,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,

    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  productName: {
    fontSize: 17,
    paddingHorizontal: 10,
    color: "#080809",
  },
  productPrice: {
    fontSize: 15,
    color: "#080809",
  },
});

export default Product;
