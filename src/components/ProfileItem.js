import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileItem = ({ icon, text }) => {
  return (
    <View style={styles.profileActions}>
      <View style={styles.businessIcon}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.businessProfille}>{text} </Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  profileActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 3,
  },
  businessIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  businessProfille: {
    fontSize: 20,
  },
});
