import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterScreenS from "../nerds/src/screens/RegisterSceenS";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreenS />
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
