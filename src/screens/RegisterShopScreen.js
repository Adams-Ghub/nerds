import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

class RegisterShopScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <View style={style.welcomeSectionContainer}>
            {/* <Text style={style.welcomeMessage}>Welcome To Nerds</Text> */}
            <Text style={style.lastStepMessage}>One Last Step</Text>
          </View>
          <View style={style.registrationFormContainer}>
            <View style={style.shopNameInputContainer}>
              <TextInput
                style={style.shopNameInput}
                placeholder="Name of Shop"
              ></TextInput>
            </View>
            <View style={style.shopNameInputContainer}>
              <TextInput
                style={style.shopNameInput}
                placeholder="Contact"
                keyboardType="phone-pad"
              ></TextInput>
            </View>

            <View style={style.shopNameInputContainer}>
              <TextInput
                style={style.shopNameInput}
                placeholder="GH-Post GPS"
              ></TextInput>
            </View>
            <View style={style.shopNameInputContainer}>
              <TextInput
                style={style.shopNameInput}
                placeholder="ID Number (Ghana Card)"
              ></TextInput>
            </View>
          </View>

          <View style={style.createShopButtonContainer}>
            <TouchableOpacity
              style={style.createShopButton}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={style.createShopButtonText}>Create Shop</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    marginBottom: 70,
  },
  lastStepMessage: {
    fontSize: 22,
    fontWeight: "normal",
    marginBottom: 0,
  },
  registrationFormContainer: {
    marginVertical: 40,
  },
  shopNameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: 15,
    marginHorizontal: 0,
  },
  shopNameInput: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 5,
  },

  createShopButtonContainer: {
    marginVertical: 70,
  },
  createShopButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  createShopButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default RegisterShopScreen;
