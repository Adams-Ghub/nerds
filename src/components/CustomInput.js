import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CustomInput = (props) => {
  // const OrderItem = ({ image, topText, downText, rightText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Username</Text>
      </View>
      <View style={styles.usernameInputContainer}>
        <TextInput style={styles.usernameInput} {...props}></TextInput>
      </View>
      <View style={styles.signupButtonContainer}>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {},
  usernameInputContainer: {
    marginVertical: 15,
    borderWidth: 1,
    height: 45,
    borderRadius: 20,
  },
  usernameInput: {
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 10,
    marginTop: 7,
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
  label: {
    fontSize: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 50,
  },
});
