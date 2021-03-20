import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import ProgressBar from "react-native-progress/Bar";

const CustomProgress = ({ leftText, color, rightText, progress }) => {
  return (
    <View style={styles.firstProgress}>
      <View style={styles.product}>
        <Text style={styles.productName}>{leftText}</Text>
        <Text style={styles.productPercent}>{rightText}</Text>
      </View>

      <ProgressBar
        progress={progress}
        width={330}
        height={20}
        color={color}
        unfilledColor="#C4C4C4"
        borderRadius={0.5}
        borderWidth={0}
      />
    </View>
  );
};

export default CustomProgress;

const styles = StyleSheet.create({
  container: {},
  firstProgress: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  product: {
    marginBottom: 5,
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
