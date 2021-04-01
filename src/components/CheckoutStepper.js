import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CheckoutStepper = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepperContainer}>
        <Text
          style={[
            styles.text,
            props.page === 1 ? { backgroundColor: "#0080FF" } : {},
          ]}
        >
          Delivery
        </Text>
        <Text
          style={[
            styles.text,
            props.page === 2 ? { backgroundColor: "#0080FF" } : {},
          ]}
        >
          Payment
        </Text>
        <Text
          style={[
            styles.text,
            props.page === 3 ? { backgroundColor: "#0080FF" } : {},
          ]}
        >
          Summary
        </Text>
      </View>
    </View>
  );
};

export default CheckoutStepper;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#000000",
    margin: 0,
  },
  stepperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
    // backgroundColor: "#0080FF",
    padding: 5,
  },
});
