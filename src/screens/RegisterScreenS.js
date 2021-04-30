import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomInput from "../components/CustomInput";
import { connect } from "react-redux";
import {
  registerError,
  createAccountCustomer,
} from "../redux/actions/authAction";

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
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Passwords do not match");
    } else {
      if (this.props.route.params.userType === "shopOwner") {
        let credentials = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          role: "shop Owner",
        };
        this.props.navigation.navigate("RegisterShop", {
          userInfo: credentials,
        });
      } else {
        this.props.createAccountCustomer(
          this.state.email,
          this.state.password,
          this.state.username,
          "customer"
        );
        // this.props.navigation.navigate("CustomerDashboard");
      }
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
          <Text style={style.createMessage}>Create Account</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {this.props.error && (
              <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
                {this.props.error.register}
              </Text>
            )}
          </View>
          <CustomInput
            label="Username"
            onChangeText={(text) => this.handleUpdateState("username", text)}
          />
          <CustomInput
            label="Email"
            onChangeText={(text) => this.handleUpdateState("email", text)}
          />
          <CustomInput
            label="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.handleUpdateState("password", text)}
          />
          <CustomInput
            label="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) => this.handleUpdateState("confirm", text)}
          />
          {/* <View style={style.registrationFormContainer}>
            <View style={style.usernameInputContainer}>
              <TextInput
                style={style.usernameInput}
                placeholder="Username"
              ></TextInput>
            </View>
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
            <View style={style.usernameInputContainer}>
              <TextInput
                style={style.usernameInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View> */}

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
              style={style.signupButton}
              onPress={() => {
                this.handleSignUp();
                // this.props.navigation.navigate("RegisterShop");
              }}
            >
              <Text style={style.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={style.haveAccountContainer}>
            <Text style={style.haveAccountText}>Already have an account ?</Text>
            <TouchableOpacity
              style={style.loginButton}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
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
  return {
    error: state.error,
  };
};

const mapDispatchToProps = () => {
  return {
    registerError,
    createAccountCustomer,
  };
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
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
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
    color: "#F88017",
  },
  signupButtonContainer: {
    marginVertical: 30,
  },
  signupButton: {
    backgroundColor: "#080809",
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
    color: "#F88017",
  },
});
