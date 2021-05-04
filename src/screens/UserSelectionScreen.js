import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class UserSelectionScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.welcomeSectionContainer}>
          <Text style={style.welcomeMessage}>Welcome To Ingrid </Text>
        </View>
        <View style={style.selection}>
          <View style={style.IamTextContainer}>
            <Text style={style.IamText}>I am a</Text>
          </View>

          <View style={style.createShopButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Welcome", {
                  screen: "Welcome",
                  params: {
                    userType: "customer",
                  },
                });
              }}
              style={style.createShopButton}
            >
              <Text style={style.createShopButtonText}>Customer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("RegisterS", {
                  userType: "shopOwner",
                });
              }}
              style={style.createShopButton}
            >
              <Text style={style.createShopButtonText}>Shop Owner</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 14,
    paddingTop: 40,
  },
  welcomeSectionContainer: {
    alignItems: "center",
  },

  welcomeMessage: {
    marginBottom: 60,
    marginTop: 40,
    fontSize: 70,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  IamTextContainer: {},

  IamText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  createShopButtonContainer: {
    // marginVertical: 80,
  },
  createShopButton: {
    backgroundColor: "#080909",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 15,
  },
  createShopButtonText: {
    color: "#ffffff",
    fontSize: 20,
    paddingVertical: 10,
  },
  selection: {
    marginVertical: 200,
  },
});

export default UserSelectionScreen;
