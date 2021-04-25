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
  productImageContainer: {
    flex: 7,
    marginBottom: 20,
    width: 160,
    height: 150,
  },
  details: {
    // backgroundColor: "rgba(165, 161, 157, 0.4)",
    borderRadius: 10,
    width: "90%",
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
