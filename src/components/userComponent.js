import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default class UserComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.userImageContainer}>
          <Image
            style={style.userImage}
            source={require("../../assets/contact.jpg")}
          />
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Nerds</Text>
          <Text>nerds@gmail.com</Text>
        </View>
        <View style={style.userRoleContainer}>
          <Text style={style.userRole}>{this.props.role}</Text>
        </View>
        <View style={style.userMoreButtonContainer}>
          <TouchableOpacity style={style.userMoreButton}>
            <Feather name="more-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    paddingVertical: hp("0.5%"),

    backgroundColor: "#dddddd",
  },
  userImage: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 25,
  },
  userRoleContainer: {
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userMoreButtonContainer: {
    justifyContent: "center",
  },
});
