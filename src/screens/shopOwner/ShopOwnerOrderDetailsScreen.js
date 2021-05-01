import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const ShopOwnerOrderDetailsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.productDetails}>
          <Image
            source={require("../../../assets/ladies_bag.jpg")}
            style={styles.image}
          />
          <View style={styles.product}>
            <Text style={styles.productName}>GUCCI Bag...</Text>
            <Text style={styles.productPrice}>3500</Text>
            <Text style={styles.productDate}>23/5/21</Text>
          </View>
        </View>
        <View style={styles.customerContainer}>
          <Text style={styles.customerTitle}>Customer Details</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>ADDRESS DETAILS</Text>
        </View>
        <View style={styles.addressDetailsContainer}>
          <Text style={styles.detailsText}>Lovelace Filson</Text>
          <Text style={styles.detailsText}>
            North Kaneshie, house Number KN 455/4
          </Text>
          <Text style={styles.detailsText}>Greater Accra</Text>
          <Text style={styles.detailsText}>North kaneshie</Text>
          <Text style={styles.detailsText}>+233244 444 444</Text>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}> DELIVERY OPTION</Text>
        </View>
        <View style={styles.addressDetailsContainer}>
          <Text style={[styles.detailsText, { fontWeight: "bold" }]}>
            Home & Office Delivery
          </Text>
          <Text style={styles.detailsText}>
            Available between mon 15th March 2021 to wed 17th March 2021
          </Text>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>SELECTED PAYMENT METHOD</Text>
        </View>
        <View style={styles.addressDetailsContainer}>
          <Text style={styles.detailsText}>
            Pay with mobile money (all networks)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShopOwnerOrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    height: 90,
    width: 90,
  },
  product: {
    flexDirection: "column",
    marginLeft: 20,
  },
  productDetails: {
    flexDirection: "row",
    marginTop: 10,
  },
  productName: {
    fontSize: 20,
  },
  productPrice: {
    fontSize: 20,
  },
  productDate: {
    fontSize: 20,
  },
  customerTitle: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  addressTitle: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: "100",
  },
  addressDetailsContainer: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    elevation: 1,
  },
  detailsText: {
    marginVertical: 5,
    marginLeft: 10,
    fontSize: 16,
  },
});
