import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { createAccountShopOwner } from "../redux/actions/authAction";

class RegisterScreenS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
      email: "",
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }
  handleSignUp = () => {
    // const email = this.state.email,
    //   password = this.state.password,
    //   username = this.state.username;
    this.props.createAccountShopOwner(
      this.state.email,
      this.state.password,
      this.state.username
    );
  };

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.welcomeSectionContainer}>
          <Text style={style.welcomeMessage}>Welcome To Nerds</Text>
          <Text style={style.createMessage}>Create Account</Text>
        </View>
        <View style={style.registrationFormContainer}>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              placeholder="Username"
              value={this.state.username}
              onChangeText={(text) => this.handleUpdateState("username", text)}
            ></TextInput>
          </View>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              placeholder="Email"
              value={this.state.email}
              onChangeText={(text) => this.handleUpdateState("email", text)}
            ></TextInput>
          </View>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={(text) => this.handleUpdateState("password", text)}
            ></TextInput>
          </View>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              placeholder="Confirm Password"
              value={this.state.confirm}
              secureTextEntry={true}
              onChangeText={(text) => this.handleUpdateState("confirm", text)}
            ></TextInput>
          </View>
        </View>
        <View style={style.termsAndPolicyContainer}>
          <Text style={style.signupCautionText}>
            By signing up you accept the
            <TouchableOpacity style={style.termsAndPolicyTextContainer}>
              <Text style={style.termsAndPolicyText}>
                Terms of Service{" "}
                <Text style={style.signupCautionText}>and</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.termsAndPolicyTextContainer}>
              <Text style={style.termsAndPolicyText}>Privacy Policy</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={style.signupButtonContainer}>
          <TouchableOpacity
            onPress={this.handleSignUp}
            style={style.signupButton}
          >
            <Text style={style.signupButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={style.haveAccountContainer}>
          <Text style={style.haveAccountText}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
            style={style.loginButton}
          >
            <Text style={style.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state };
};
const mapDispatchToProps = () => {
  return { createAccountShopOwner };
};
export default connect(mapStateToProps, mapDispatchToProps())(RegisterScreenS);

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
  createMessage: {
    fontSize: 22,
    fontWeight: "normal",
    marginBottom: 0,
  },
  registrationFormContainer: {
    marginVertical: 40,
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
  termsAndPolicyTextContainer: {},
  signupCautionText: {
    fontSize: 18,
    color: "#000000",
    marginTop: 30,
  },
  termsAndPolicyText: {
    fontSize: 17,
    marginRight: 3,
    color: "#0080FF",
  },
  signupButtonContainer: {
    marginVertical: 30,
  },
  signupButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 10,
  },
  haveAccountContainer: {
    flexDirection: "row",
  },
  haveAccountText: {
    fontSize: 17,
    marginRight: 10,
  },
  loginButton: {
    marginHorizontal: 10,
  },
  loginText: {
    fontSize: 17,
    color: "#0080ff",
  },
});
