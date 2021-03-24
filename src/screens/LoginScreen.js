import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { LoginShopOwner } from "../redux/actions/authAction.js";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

  handleLogin = () => {
    this.props.LoginShopOwner(this.state.email, this.state.password);
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
          <Text style={style.loginMessage}>Login to continue</Text>
        </View>
        <View style={style.registrationFormContainer}>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              value={this.state.email}
              onChangeText={(text) => this.handleUpdateState("email", text)}
              placeholder="Email"
            ></TextInput>
          </View>
          <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              value={this.state.password}
              placeholder="Password"
              onChangeText={(text) => this.handleUpdateState("password", text)}
              secureTextEntry={true}
            ></TextInput>
          </View>

          <TouchableOpacity style={style.forgotpassContainer}>
            <Text style={style.forgotpassText}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        <View style={style.loginButtonContainer}>
          <TouchableOpacity
            onPress={this.handleLogin}
            style={style.loginButton}
          >
            <Text style={style.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={style.haveAccountContainer}>
          <Text style={style.haveAccountText}>Don't have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("RegisterS");
            }}
            style={style.signupButton}
          >
            <Text style={style.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};
const mapDispatchToProps = () => {
  return {
    LoginShopOwner,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(LoginScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("7%"),
    marginHorizontal: wp("10"),
  },
  welcomeSectionContainer: {
    alignItems: "center",
    marginBottom: hp("5%"),
  },

  welcomeMessage: {
    fontSize: 36,
    fontWeight: "200",
    marginBottom: hp("7%"),
  },
  loginMessage: {
    fontSize: 22,
    fontWeight: "normal",
    marginBottom: 0,
  },
  registrationFormContainer: {
    marginVertical: hp("5%"),
  },
  usernameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: hp("2%"),
  },
  usernameInput: {
    fontSize: 20,
    marginVertical: hp("0.5%"),
    marginLeft: wp("1%"),
  },
  forgotpassContainer: {
    alignItems: "flex-end",
    marginVertical: hp("1%"),
  },

  forgotpassText: {
    fontSize: 17,
    marginRight: 3,
    color: "#0080FF",
  },
  loginButtonContainer: {
    marginVertical: hp("4%"),
  },
  loginButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: hp("1%"),
  },
  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: hp("5%"),
  },
  haveAccountText: {
    fontSize: 17,
    marginRight: wp("2%"),
  },
  signupButton: {
    marginHorizontal: wp("5%"),
  },
  signupText: {
    fontSize: 17,
    color: "#0080ff",
  },
});
