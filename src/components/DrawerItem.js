import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DrawerItem = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ProfilePage}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.Profile}>{title}</Text>
      </View>
    </View>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {},
  ProfilePage: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 8,
  },
  Profile: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});
