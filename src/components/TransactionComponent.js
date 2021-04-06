import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default class TransactionComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.idAndDatecontainer}>
          <Text style={styles.idText}>0001234</Text>
          <Text style={styles.dateText}>02-04-2021</Text>
        </View>
        <View style={styles.buyerAndVendorInfoContainer}>
          <Text style={styles.productText}>HP Omen Laptop</Text>
          <Text style={styles.productPriceText}>GH¢ 1800</Text>

          <Text style={styles.modeOfPaymentText}>{this.props.paymentmode}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: "solid",
    marginVertical: hp("0.3%"),
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("2%"),
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  idAndDatecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyerAndVendorInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  idText: {
    color: "#aaaaaa",
  },
  dateText: {
    color: "#aaaaaa",
  },
  productText: {
    fontSize: 17,
  },
  modeOfPaymentText: {
    fontWeight: "bold",
    color: "#0080ff",
  },
  productPriceText: {
    fontWeight: "bold",
  },
});
