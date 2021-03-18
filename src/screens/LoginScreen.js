import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.welcomeSectionContainer}>
          <Text style={style.welcomeMessage}>Welcome To Nerds</Text>
          <Text style={style.loginMessage}>Login to continue</Text>
        </View>
        <View style={style.registrationFormContainer}>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              placeholder="Email"
            ></TextInput>
          </View>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              placeholder="Password"
              secureTextEntry={true}
            ></TextInput>
          </View>

          <TouchableOpacity style={style.forgotpassContainer}>
            <Text style={style.forgotpassText}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        <View style={style.loginButtonContainer}>
          <TouchableOpacity style={style.loginButton}>
            <Text style={style.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={style.haveAccountContainer}>
          <Text style={style.haveAccountText}>Already have an account ?</Text>
          <TouchableOpacity style={style.signupButton}>
            <Text style={style.signupText}>Sign up</Text>
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
    marginBottom: 40,
  },

  welcomeMessage: {
    fontSize: 36,
    fontWeight: "200",
    marginBottom: 70,
  },
  loginMessage: {
    fontSize: 22,
    fontWeight: "normal",
    marginBottom: 0,
  },
  registrationFormContainer: {
    marginVertical: 50,
  },
  usernameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: 15,
  },
  usernameInput: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 5,
  },
  forgotpassContainer: {
    alignItems: "flex-end",
    marginVertical: 15,
  },

  forgotpassText: {
    fontSize: 17,
    marginRight: 3,
    color: "#0080FF",
  },
  loginButtonContainer: {
    marginVertical: 30,
  },
  loginButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 10,
  },
  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 25,
  },
  haveAccountText: {
    fontSize: 17,
    marginRight: 10,
  },
  signupButton: {
    marginHorizontal: 10,
  },
  signupText: {
    fontSize: 17,
    color: "#0080ff",
  },
});

export default LoginScreen;
