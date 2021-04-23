import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ProductComponentS(props) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.productContainer}>
        <View style={style.productImageContainer}>
          <Image style={style.productImage} source={{ uri: props.image }} />
        </View>
        <View style={style.infoAndBtnsContainer}>
          <View style={style.nameAndPriceContainer}>
            <Text numberOfLines={1} style={style.productName}>
              {props.name}
            </Text>
            <Text style={style.productPrice}>GH¢{props.sp}</Text>
          </View>
          <View style={style.editAndDeleteBtnContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditProduct");
              }}
            >
              <MaterialIcons name="mode-edit" size={20} color="#0080ff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete" size={20} color="#ba1e20" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp("0.5%"),
    marginVertical: wp("0.5%"),
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: hp("27%"),
    maxWidth: wp("50%"),
  },
  productContainer: {
    height: hp("23%"),
    width: wp("40%"),
    backgroundColor: "#FFFFFF",
    marginHorizontal: wp("4%"),
    marginVertical: hp("5%"),
  },
  productImageContainer: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 145,
    height: 140,
  },
  infoAndBtnsContainer: {
    flex: 1,
    marginVertical: 10,
  },
  productName: {
    fontSize: 15,
    maxWidth: wp("35%"),
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("0.5%"),
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
  },
  infoAndBtnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editAndDeleteBtnContainer: {
    marginTop: hp("1%"),
  },
});

export default ProductComponentS;
