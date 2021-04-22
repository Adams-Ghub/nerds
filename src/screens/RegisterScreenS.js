import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";
import { createAccountShopOwner } from "../redux/actions/authAction";
import RegisterShopScreen from "../screens/RegisterShopScreen";

class RegisterScreenS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
      email: "",
      shopName: "",
      ghpostGps: "",
      contact: "",
      idNumber: "",
      errorMsg: "",
      //current form indicator(shop owner form,1= shop form)
      currentFormIndicator: "0",
      msg: "Create Account",
      backColor: "#cccccc",
      nextColor: "#0080FF",
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

  handleSignUp = () => {
    if (this.props.route.params.userType) {
      if (this.props.route.params.userType === "shopOwner")
        this.props.navigation.navigate("ShopOwnerDashboard");
    } else {
      this.props.navigation.navigate("CustomerDashboard");
    }
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
          <Text style={style.createMessage}>{this.state.msg}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.registrationFormContainer}>
            <View>
              <View style={style.usernameInputContainer}>
                <TextInput
                  style={style.usernameInput}
                  placeholder="Username"
                  value={this.state.username}
                  onChangeText={(text) =>
                    this.handleUpdateState("username", text)
                  }
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
                  onChangeText={(text) =>
                    this.handleUpdateState("password", text)
                  }
                ></TextInput>
              </View>
              <View style={style.usernameInputContainer}>
                <TextInput
                  style={style.usernameInput}
                  placeholder="Confirm Password"
                  value={this.state.confirm}
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    this.handleUpdateState("confirm", text)
                  }
                ></TextInput>
              </View>
              <View style={style.errorMsgContainer}>
                <Text></Text>
              </View>
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
        </ScrollView>
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
    marginVertical: hp("7%"),
    marginHorizontal: wp("10%"),
  },
  welcomeSectionContainer: {
    alignItems: "center",
  },

  welcomeMessage: {
    fontSize: 36,
    fontWeight: "200",
    marginBottom: hp("6%"),
  },
  createMessage: {
    fontSize: 22,
    fontWeight: "normal",
    marginBottom: 0,
  },
  registrationFormContainer: {
    marginTop: hp("7%"),
  },
  usernameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: hp("1.5%"),
  },
  usernameInput: {
    fontSize: 20,
    marginVertical: hp("1%"),
    marginLeft: wp("1%"),
  },
  termsAndPolicyTextContainer: {},
  signupCautionText: {
    fontSize: 18,
    color: "#000000",
  },
  termsAndPolicyText: {
    fontSize: 17,
    marginRight: 3,
    color: "#0080FF",
  },
  signupButtonContainer: {
    marginVertical: hp("3%"),
  },
  signupButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: hp("1%"),
  },
  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  haveAccountText: {
    fontSize: 17,
    marginRight: wp("4%"),
  },
  loginButton: {
    marginHorizontal: wp("3%"),
  },
  loginText: {
    fontSize: 17,
    color: "#0080ff",
  },
  registrationFormSwitchButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("3%"),
  },
});
