import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class userComponent extends Component {
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
          <Text style={style.userName}>Adams</Text>
        </View>
        <View style={style.userRoleContainer}>
          <Text style={style.userRole}>{this.props.role}</Text>
        </View>
        <View style={style.userImageContainer}>
          <TouchableOpacity style={style.userMoreButton}>
            <Feather name="more-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {},
});
