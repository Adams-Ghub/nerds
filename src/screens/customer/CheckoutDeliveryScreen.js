import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CheckoutStepper from "../../components/CheckoutStepper";

const CheckoutDeliveryScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <CheckoutStepper page={1} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>ADDRESS DETAILS</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Lovelace Filson</Text>
            <Text style={styles.detailsText}>
              North Kaneshie, house Number KN 455/4
            </Text>
            <Text style={styles.detailsText}>Greater Accra</Text>
            <Text style={styles.detailsText}>North kaneshie</Text>
            <View style={styles.editContainer}>
              <Text style={styles.detailsText}>+233244 444 444</Text>
              <TouchableOpacity>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>CHOOSE DELIVERY OPTION</Text>
          </View>
          <View style={styles.addressDetailsContainer}>
            <View style={styles.icon}>
              <MaterialIcons
                name="radio-button-checked"
                size={18}
                color="#0080FF"
              />
            </View>
            <View style={styles.choose1}>
              <Text style={styles.detailsText}>
                Drive through shop and pick up product
              </Text>
              <Text style={styles.detailsText}>Available by 7pm</Text>
              <View style={styles.detailsTextContainer}>
                <Text style={styles.detailsText}>Fee:</Text>
                <Text style={styles.priceText}>GHS 0</Text>
              </View>
            </View>
          </View>

          <View style={styles.addressDetailsContainer}>
            <View style={styles.icon}>
              <MaterialIcons
                name="radio-button-unchecked"
                size={18}
                color="#0080FF"
              />
            </View>
            <View style={styles.choose2}>
              <Text style={styles.detailsText}>Home & Office Delivery</Text>
              <Text style={styles.detailsText}>
                Available between mon 15th March 2021 to wed 17th March 2021
              </Text>
              <View style={styles.detailsTextContainer}>
                <Text style={styles.detailsText}>Fee:</Text>
                <Text style={styles.priceText}>GHS 15</Text>
              </View>
            </View>
          </View>

          <View style={styles.checkout}>
            <View style={styles.checkoutText1}>
              <Text style={styles.total}> Subtotal</Text>
              <Text style={styles.price}>{"GH??? " + route.params.total}</Text>
            </View>
            <View style={styles.checkoutText2}>
              <Text style={styles.total}>Delivery</Text>
              <Text style={styles.price}>GH???0</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.checkoutText}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.price}>{"GH??? " + route.params.total}</Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  navigation.navigate("CheckoutPayment");
                }}
              >
                <Text style={styles.proceed}>Proceed to payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutDeliveryScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  addressDetailsContainer: {
    marginVertical: 5,
    paddingLeft: 5,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    elevation: 1,
  },
  detailsContainer: {
    marginBottom: 25,
    paddingLeft: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
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
  checkoutText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  checkout: {
    paddingTop: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    paddingHorizontal: 10,
    marginTop: 25,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#B0B0B0",
    alignSelf: "center",
    marginTop: 5,
  },
  checkoutText1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  checkoutText2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "#0080FF",
  },
  detailsText: {
    marginVertical: 5,
  },
  choose1: {
    paddingLeft: 20,
  },
  choose2: {
    paddingLeft: 20,
  },
  icon: {
    paddingLeft: 5,
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: {
    paddingRight: 15,
    alignSelf: "center",
    color: "#0080FF",
  },
  priceText: {
    color: "#0080FF",
    alignSelf: "center",
  },
  detailsTextContainer: {
    flexDirection: "row",
  },
  addressContainer: {
    marginTop: 25,
  },
  proceed: {
    color: "#ffffff",
  },
});
