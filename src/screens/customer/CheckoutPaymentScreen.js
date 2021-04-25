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

const CheckoutPaymentScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CheckoutStepper page={2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>SELECT PAYMENT OPTION</Text>
          </View>
          <View style={styles.addressDetailsContainer}>
            <View style={styles.icon}>
              <MaterialIcons
                name="radio-button-unchecked"
                size={18}
                color="#0080FF"
              />
            </View>

            <View style={styles.choose1}>
              <Text style={styles.detailsText}>
                Pay with mobile money(all networks)
              </Text>
            </View>
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
              <Text style={styles.detailsText}>Payment on delivery</Text>
            </View>
          </View>

          <View style={styles.checkout}>
            <View style={styles.checkoutText1}>
              <Text style={styles.total}> Subtotal</Text>
              <Text style={styles.price}>GH₵3500</Text>
            </View>
            <View style={styles.checkoutText2}>
              <Text style={styles.total}>Delivery</Text>
              <Text style={styles.price}>GH₵0</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.checkoutText}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.price}>GH₵3500</Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  navigation.navigate("CheckoutSummary");
                }}
              >
                <Text style={styles.proceed}>Proceed to summary</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutPaymentScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  addressDetailsContainer: {
    flex: 1,
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
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  icon: {
    paddingLeft: 5,
    marginTop: 5,
  },

  addressContainer: {
    marginTop: 25,
  },

  proceed: {
    color: "#ffffff",
  },
});
