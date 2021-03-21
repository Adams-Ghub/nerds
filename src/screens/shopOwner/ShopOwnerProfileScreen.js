import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileTitle from "../../components/ProfileTitle";

const ShopOwnerProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ProfileTitle />
      </View>
      <View style={styles.detailsContainer}>
        <ProfileDetails />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.saveButton}>
            <Text style={styles.save}>SAVE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopOwnerProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.25,
  },
  detailsContainer: {
    flex: 0.7,
    marginHorizontal: 20,
    marginTop: -100,
  },
  buttonContainer: {
    backgroundColor: "#0080FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,

    height: 40,
    width: 130,
  },
  bottomContainer: {
    flex: 0.1,
    alignItems: "center",
  },
  save: {
    color: "#ffffff",
    fontSize: 16,
  },
});
