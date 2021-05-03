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
import { createAccountShopOwner } from "../redux/actions/authAction";
import CustomInput from "../components/CustomInput";

class RegisterShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: "",
      ghpostGps: "",
      contact: "",
      idNumber: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleSignUp = () => {
    this.props.createAccountShopOwner(
      this.props.route.params.userInfo.email,
      this.props.route.params.userInfo.password,
      this.props.route.params.userInfo.username,
      this.props.route.params.userInfo.role,
      this.state.shopName,
      this.state.contact,
      this.state.ghpostGps,
      this.state.idNumber
    );
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <View style={style.welcomeSectionContainer}>
            {/* <Text style={style.welcomeMessage}>Welcome To Ingrid</Text> */}
            <Text style={style.lastStepMessage}>One Last Step</Text>
          </View>
          <CustomInput
            label="Name of Shop"
            onChangeText={(text) => this.handleUpdateState("shopName", text)}
          />
          <CustomInput
            label="Contact"
            onChangeText={(text) => this.handleUpdateState("contact", text)}
          />
          <CustomInput
            label="GH-Post GPS"
            onChangeText={(text) => this.handleUpdateState("ghpostGps", text)}
          />
          <CustomInput
            label="ID Number (Ghana Card)"
            onChangeText={(text) => this.handleUpdateState("idNumber", text)}
          />
          <View style={style.registrationFormContainer}>
            {/* <View style={style.shopNameInputContainer}>
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
            </View> */}
          </View>

          <View style={style.createShopButtonContainer}>
            <TouchableOpacity
              style={style.createShopButton}
              onPress={() => {
                this.handleSignUp();
                // this.props.navigation.navigate("Login");
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
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    createAccountShopOwner,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(RegisterShopScreen);
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 40,
    alignSelf: "flex-start",
  },
  registrationFormContainer: {
    marginVertical: 40,
  },
  shopNameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginHorizontal: 0,
  },
  shopNameInput: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 5,
  },

  createShopButtonContainer: {
    marginBottom: 20,
  },
  createShopButton: {
    backgroundColor: "#080809",
    borderRadius: 8,
    alignItems: "center",
  },
  createShopButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 10,
  },
});
