import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CustomInput = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.usernameInputContainer}>
        <TextInput style={styles.usernameInput} {...rest} />
      </View>
      {/* <View style={styles.signupButtonContainer}>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {},
  usernameInputContainer: {
    borderWidth: 1,
    marginBottom: 20,
    height: 45,
    borderRadius: 20,
    marginTop: 5,
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
    fontWeight: "300",
    marginBottom: 0,
  },
  header: {
    fontWeight: "bold",
    fontSize: 50,
  },
});
