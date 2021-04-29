import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { removeProduct } from "../redux/actions/authAction";

class CartProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.cartContainer}>
        <View style={styles.cart}>
          <Image
            source={{ uri: this.props.imageuri }}
            style={styles.imagestyle}
          />
          <View style={styles.product}>
            <Text style={styles.productName}>{this.props.name}</Text>
            <Text style={styles.productPrice}>{"GH₵ " + this.props.price}</Text>
          </View>
        </View>
        <View style={styles.line} />

        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.removeProduct(this.props.item);
            }}
            style={styles.deleteicon}
          >
            <View style={styles.icon}>
              <MaterialIcons name="delete" size={20} color="#080809" />
            </View>
            <Text style={styles.remove}>REMOVE</Text>
          </TouchableOpacity>
          <View style={styles.upanddown}>
            <View style={styles.icon2}>
              <MaterialIcons name="arrow-drop-down" size={35} color="#080809" />
            </View>
            <Text style={styles.number1}>{this.props.qty}</Text>
            <View style={styles.icon3}>
              <MaterialIcons name="arrow-drop-up" size={35} color="#080809" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    removeProduct,
  };
};

export default connect(null, mapDispatchToProps())(CartProduct);

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    marginVertical: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },

  imagestyle: {
    height: 70,
    width: 70,
  },
  cart: {
    flexDirection: "row",
    marginTop: 10,
  },
  product: {
    justifyContent: "center",
    marginHorizontal: 20,
  },
  productName: {
    marginBottom: 20,
    fontSize: 20,
  },
  productPrice: {
    fontSize: 20,
    color: "#080809",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#B0B0B0",
    alignSelf: "center",
    marginTop: 5,
  },
  remove: {
    color: "#0080FF",
  },
  number1: {
    color: "#0080FF",
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  deleteicon: {
    flexDirection: "row",
    alignItems: "center",
  },
  upanddown: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonContainer: {
    backgroundColor: "#080809",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 40,
    width: 300,
    marginVertical: 40,
  },
});
