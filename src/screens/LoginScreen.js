import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { LoginUser, loginError } from "../redux/actions/authAction.js";
import CustomInput from "../components/CustomInput";
import { auth } from "firebase";

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
    this.props.LoginUser(this.state.email, this.state.password);
  };
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <View style={style.welcomeSectionContainer}>
            {/* <Text style={style.welcomeMessage}>Welcome To Ingrid</Text> */}
            <Text style={style.loginMessage}>Login to continue</Text>
          </View>
          <View>
            {this.props.auth.error.login && (
              <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
                {this.props.auth.error.login}
              </Text>
            )}
          </View>
          <CustomInput
            label="Email"
            onChangeText={(text) => this.handleUpdateState("email", text)}
          />
          <CustomInput
            label="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.handleUpdateState("password", text)}
          />
          <View style={style.registrationFormContainer}>
            {/* <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              value={this.state.email}
              onChangeText={(text) => this.handleUpdateState("email", text)}
              placeholder="Email"
            ></TextInput>
          </View> */}
            {/* <View style={style.usernameInputContainer}>
            <TextInput
              style={style.usernameInput}
              value={this.state.password}
              placeholder="Password"
              onChangeText={(text) => this.handleUpdateState("password", text)}
              secureTextEntry={true}
            ></TextInput>
          </View> */}

            <TouchableOpacity style={style.forgotpassContainer}>
              <Text style={style.forgotpassText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          <View style={style.loginButtonContainer}>
            <TouchableOpacity
              style={style.loginButton}
              onPress={() => {
                this.handleLogin();
                // this.props.navigation.navigate("ShopOwnerDashboard");
              }}
            >
              <Text style={style.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={style.haveAccountContainer}>
            <Text style={style.haveAccountText}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("RegisterS", {
                  userType: "customer",
                });
              }}
              style={style.signupButton}
            >
              <Text style={style.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    LoginUser,
    loginError,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(LoginScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  welcomeSectionContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  welcomeMessage: {
    fontSize: 36,
    fontWeight: "200",
    marginBottom: 10,
  },
  loginMessage: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  registrationFormContainer: {
    marginVertical: 20,
  },
  usernameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: 10,
  },
  usernameInput: {
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
  forgotpassContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
  },

  forgotpassText: {
    fontSize: 17,
    marginRight: 3,
    color: "#0080FF",
  },
  loginButtonContainer: {
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#080809",
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
    marginVertical: 10,
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
    color: "#0080FF",
  },
});
