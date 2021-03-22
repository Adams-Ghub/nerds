import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileItem from "./ProfileItem";
import { MaterialIcons } from "@expo/vector-icons";

function ProfileDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCredential}>
        <Text style={styles.profileName}>Abraham Lincoln</Text>
        <Text style={styles.profileEmail}>abrahamlincoln@gmail.com</Text>
        <ProfileItem
          text="Business Profile"
          icon={<MaterialIcons name="card-travel" size={20} color="black" />}
        />

        <ProfileItem
          text="My Products"
          icon={<MaterialIcons name="inbox" size={20} color="black" />}
        />
        <ProfileItem
          text="Orders"
          icon={<MaterialIcons name="shopping-cart" size={20} color="black" />}
        />
        <ProfileItem
          text="Reset Password"
          icon={<MaterialIcons name="lock" size={20} color="black" />}
        />
      </View>
    </View>
  );
}

export default ProfileDetails;

const styles = StyleSheet.create({
  profileActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
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
