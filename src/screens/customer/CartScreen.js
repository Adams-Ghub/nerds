import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CartScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cartContainer}>
          <View style={styles.cart}>
            <Image
              source={require("../../../assets/productImg.png")}
              style={styles.image}
            />
            <View style={styles.product}>
              <Text style={styles.productName}>HP Laptop...</Text>
              <Text style={styles.productPrice}>GH₵3500</Text>
            </View>
          </View>
          <View style={styles.line} />

          <View style={styles.iconContainer}>
            <View style={styles.deleteicon}>
              <View style={styles.icon}>
                <MaterialIcons name="delete" size={20} color="#0080FF" />
              </View>
              <Text style={styles.remove}>REMOVE</Text>
            </View>
            <View style={styles.upanddown}>
              <View style={styles.icon2}>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color="#0080FF"
                />
              </View>
              <Text style={styles.number1}>1</Text>
              <View style={styles.icon3}>
                <MaterialIcons name="arrow-drop-up" size={24} color="#0080FF" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.checkout}>
          <View style={styles.checkoutText}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.price}>GH₵3500</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                navigation.navigate("CheckoutDelivery");
              }}
            >
              <Text style={styles.proceed}>Proceed to checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 40,
  },

  image: {
    height: 90,
    width: 90,
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
    color: "#0080FF",
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
  cartContainer: {
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
  buttonContainer: {
    backgroundColor: "#0080FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 40,
    width: 300,
    marginVertical: 40,
  },

  proceed: {
    color: "#ffffff",
    fontSize: 16,
  },
  price: {
    color: "#0080FF",
  },
  checkoutText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkout: {
    paddingTop: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
