import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Product from "./src/components/ProductComponent";
import UserSelectionScreen from "./src/screens/UserSelectionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.productsContainer}>
        <Product />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  productsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
