import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import RNWebview from "./RNWebview";

class MobileNumberScreen extends Component {
  state = {
    number: "",
    uri: null,
  };
  handleNumber = (text) => {
    this.setState({ number: text });
  };

  paymentSuccessful = () => {
    this.props.navigation.navigate("paymentSuccessful");
  };

  continue = () => {
    if (this.state.number.length === 10) {
      let data = {
        tx_ref: "ingrid" + (1000 + Math.floor(Math.random * 100000)),
        amount: "150",
        currency: "GHS",
        network: "MTN",
        email: "ingrid@gmail.com",
        phone_number: this.state.number,
        redirect_url: "https://codetraingh.com",
      };

      fetch("https://api.flutterwave.com/v3/charges?type=mobile_money_ghana", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer FLWSECK_TEST-b300859b27e75571299b7beb31bd2e56-X", //remember to replace this with your flutterwave api key
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.setState({ uri: data.meta.authorization.redirect });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  // login = (email, pass) => {
  //   alert("email: " + email + " password: " + pass);
  // };
  render() {
    return (
      <View style={styles.container}>
        {this.state.uri === null ? (
          <View>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Enter mtn mobile number"
              placeholderTextColor="#000"
              autoCapitalize="none"
              keyboardType={"numeric"}
              onChangeText={this.handleNumber}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.continue}
            >
              <Text style={styles.submitButtonText}> Continue </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <RNWebview
            uri={this.state.uri}
            closeWebView={this.paymentSuccessful}
          />
        )}
      </View>
    );
  }
}
export default MobileNumberScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#0080FF",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#080809",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
    alignSelf: "center",
  },
});
