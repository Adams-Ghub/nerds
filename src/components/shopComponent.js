import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

class Shop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.ShopContainer}>
          <View style={style.ShopImageContainer}>
            <Image
              style={style.ShopImage}
              source={require("../../assets/cictech_logo.jpg")}
            />
          </View>
          <View style={style.detailSection}>
            <Text style={style.ShopName}>Cictech Electronics Ltd.</Text>
            <Text style={style.ShopLocation}>Kasoa, Amafro</Text>
            <Text>0547 117 135</Text>
            <Text>Electronics</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Shop;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp("0.5%"),
    marginVertical: wp("0.5%"),
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
  },
  ShopContainer: {
    height: hp("12%"),
    width: wp("95%"),

    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("0.5%"),

    marginVertical: hp("0.1%"),
  },
  detailSection: {
    marginHorizontal: wp("3%"),
  },
  ShopImageContainer: {
    marginHorizontal: wp("3%"),
  },
  ShopImage: {
    width: wp("22%"),
    height: wp("22%"),
  },

  ShopName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0080ff",
  },
  ShopLocation: {
    fontSize: 18,
  },
});
