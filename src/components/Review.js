import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Rating } from "react-native-ratings";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function Review() {
  return (
    <View style={styles.container}>
      <View style={styles.dateReviewContainer}>
        <View style={styles.reviewContainer}>
          <Rating tintColor="#eee" imageSize={15} type="star" />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>23-03-2021</Text>
        </View>
      </View>
      <Text style={styles.remarkText}>It's perfect</Text>
      <Text style={styles.commentText}>
        Received as seen and in perfect condition
      </Text>
      <Text style={styles.reviewerNameText}>by John</Text>
    </View>
  );
}

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("0.5%"),
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("0.5%"),
    borderStyle: "solid",
    borderColor: "#cccccc",
    borderBottomWidth: wp("0.1%"),
    // backgroundColor: "#ddd",
  },
  dateReviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  remarkText: {
    fontSize: 17,
    fontWeight: "700",
  },
  reviewerNameText: {
    color: "#0080ff",
  },
});
