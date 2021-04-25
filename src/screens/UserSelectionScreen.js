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

class UserSelectionScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.welcomeSectionContainer}>
          <Text style={style.welcomeMessage}>Welcome To Nerds</Text>
        </View>
        <View style={style.IamTextContainer}>
          <Text style={style.IamText}>I am a</Text>
        </View>

        <View style={style.createShopButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Welcome");
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
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("8%"),
    marginHorizontal: wp("10%"),
  },
  welcomeSectionContainer: {
    alignItems: "center",
  },

  welcomeMessage: {
    marginBottom: 50,
    fontSize: 45,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  IamTextContainer: {},

  IamText: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 30,
  },

  createShopButtonContainer: {
    marginVertical: 50,
  },
  createShopButton: {
    backgroundColor: "#080909",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: hp("5%"),
  },
  createShopButtonText: {
    color: "#ffffff",
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default UserSelectionScreen;
