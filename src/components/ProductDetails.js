import React, { Component } from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.ProductImageSection}>
          <Image
            style={style.Image}
            source={require("../../assets/productImg.png")}
          />
        </View>
        <View style={style.basicDetailSection}>
          <Text style={style.productNameText}>Black HP Omen Laptop</Text>
          <Text style={style.priceText}>GH¢ 2500</Text>
          <View style={style.shopNameContainer}>
            <Text style={style.shopText}>Shop:</Text>
            <Text style={style.shopNameText}>Cictech Electronics Ltd.</Text>
          </View>
          <View style={style.ratingSection}>
            <Text>*****</Text>
            <Text>(234 ratings)</Text>
          </View>
        </View>
        <View style={style.deliveryInformationSection}>
          <Text style={style.deliveryInformationText}>
            Delivery Information
          </Text>
          <View style={style.chooseLocationSection}>
            <Text style={style.chooseLocatonText}>choose loacation</Text>
            <TouchableOpacity>
              <Text style={style.picklocationText}>pick location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProductDetails;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
