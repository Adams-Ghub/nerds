import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileItem from "./ProfileItem";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCredential}>
        <View style={styles.profileContainer}>
          <View style={styles.editIcon}>
            <MaterialIcons name="edit" size={24} color="black" />
          </View>
          <Text style={styles.profileName}>Abraham Lincoln</Text>
          <Text style={styles.profileEmail}>abrahamlincoln@gmail.com</Text>
          <View style={styles.line} />
        </View>

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
};

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
  profileName: {
    fontSize: 20,
    textAlign: "center",
  },
  profileEmail: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 30,
  },
  line: {
    width: 306,
    height: 1,
    backgroundColor: "#B0B0B0",
    alignSelf: "center",
    marginBottom: 25,
  },
  editIcon: {
    flexDirection: "row-reverse",
    marginLeft: 20,
  },
});
