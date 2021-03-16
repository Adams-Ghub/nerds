import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class UserSelectionScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.welcomeSectionContainer}>
          <Text style={style.welcomeMessage}>Welcome To Nerds</Text>
        </View>
        <View style={style.IamTextContainer}>
          <Text style={style.IamText}>I am a</Text>
        </View>

        <View style={style.createShopButtonContainer}>
          <TouchableOpacity style={style.createShopButton}>
            <Text style={style.createShopButtonText}>Customer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.createShopButton}>
            <Text style={style.createShopButtonText}>Shop Owner</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 40,
    marginHorizontal: 40,
  },
  welcomeSectionContainer: {
    alignItems: "center",
  },

  welcomeMessage: {
    fontSize: 36,
    fontWeight: "200",
    marginBottom: 130,
  },
  IamTextContainer: {},
  IamText: {
    fontSize: 22,
    fontWeight: "normal",
    marginTop: 30,
  },

  createShopButtonContainer: {
    marginVertical: 60,
  },
  createShopButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 45,
  },
  createShopButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default UserSelectionScreen;
