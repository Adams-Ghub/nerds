import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
    width: 100,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
  },
  infoAndBtnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductComponentS;
