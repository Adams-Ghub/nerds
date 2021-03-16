import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterScreenC from "../nerds/src/screens/RegisterScreenC";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreenC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
