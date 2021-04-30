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
                navigation.navigate("EditProduct", {
                  selectedProduct: props.product,
                });
              }}
            >
              <MaterialIcons name="mode-edit" size={25} color="#0080ff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete" size={25} color="#ba1e20" />
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
    marginHorizontal: 3,
    marginVertical: 3,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
  },
  productContainer: {
    height: 150,
    width: 150,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginVertical: 45,
  },

  productImage: {
    width: 140,
    height: 137,
  },
  productImageContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    flex: 2,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  editAndDeleteBtnContainer: {
    marginTop: hp("1%"),
  },
});

export default ProductComponentS;
