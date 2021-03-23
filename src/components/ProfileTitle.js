import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ProfileTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.black}>
        <Text style={styles.title}>Profile</Text>
      </View>
    </View>
  );
};

export default ProfileTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  black: {
    flex: 1,
    backgroundColor: "#000000",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 30,
    color: "#ffffff",
    marginLeft: 30,
    marginVertical: 30,
  },
});
