import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.payment}> Payment Successful</Text>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  payment: {
    fontWeight: "bold",
  },
});
