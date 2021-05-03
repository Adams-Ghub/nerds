import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CartProduct from "../../components/CartProduct";
import { connect } from "react-redux";
import { removeProduct } from "../../redux/actions/authAction";

class CartScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let total = 0;
    if (this.props.cart && this.props.cart.length > 0) {
      for (let i = 0; i < this.props.cart.length; i++) {
        let item = this.props.cart[i];
        total += parseInt(item.product.sp) * parseInt(item.qty);
      }
    }

    return (
      <View style={styles.container}>
        <View
          showsVerticalScrollIndicator={false}
          style={styles.cartproductsDisplayContainer}
        >
          <FlatList
            data={this.props.cart}
            renderItem={({ item }) => {
              return (
                <View>
                  <CartProduct
                    name={item.product.productName}
                    price={item.product.sp}
                    imageuri={`data:image/jpg;base64,${item.product.base64}`}
                    item={item.product.id}
                    qty={item.qty}
                  />
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.checkout}>
          <View style={styles.checkoutText}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.price}>GH₵{total}</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                if (this.props.auth === true) {
                  this.props.navigation.navigate("CheckoutDelivery", {
                    total: total,
                  });
                } else {
                  this.props.navigation.navigate("Login");
                }
              }}
            >
              <Text style={styles.proceed}>Proceed to checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.Login,
    cart: state.cart,
  };
};
const mapDispatchToProps = () => {
  return {
    removeProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 15,
  },
  cartproductsDisplayContainer: {
    flex: 0.8,
  },
  cart: {
    flexDirection: "row",
    marginTop: 10,
  },
  product: {
    justifyContent: "center",
    marginHorizontal: 20,
  },
  // productName: {
  //   marginBottom: 20,
  //   fontSize: 20,
  // },
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
    backgroundColor: "#080809",
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
    color: "#080809",
  },
  checkoutText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkout: {
    flex: 0.2,
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
