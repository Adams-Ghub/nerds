import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserSelectionScreen from "../nerds/src/screens/UserSelectionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <UserSelectionScreen />
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
