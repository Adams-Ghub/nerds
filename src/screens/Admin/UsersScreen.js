import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Shop from "../../components/shopComponent";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import UserComponent from "../../components/userComponent";

export default class userScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.searchBoxCotainer}>
          <TextInput
            style={style.searchBox}
            placeholder="enter username you want to search"
          ></TextInput>
          <TouchableOpacity style={style.searchBoxButton}>
            <MaterialCommunityIcons
              style={{ marginHorizontal: wp("3%"), marginTop: hp("0.5%") }}
              name="magnify"
              size={20}
              color="#cccccc"
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <UserComponent role="Customer" />
          <UserComponent role="Customer" />
          <UserComponent role="Admin" />
          <UserComponent role="Customer" />
          <UserComponent role="Shop Owner" />
          <UserComponent role="Customer" />
          <UserComponent role="Customer" />
          <UserComponent role="Shop Owner" />
          <UserComponent role="Customer" />
          <UserComponent role="Customer" />
          <UserComponent role="Admin" />
          <UserComponent role="Customer" />
          <UserComponent role="Shop Owner" />
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginVertical: hp("2%"),
    marginHorizontal: wp("5%"),
  },
  searchBoxCotainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: wp("0.2%"),
    borderRadius: 9,
    marginBottom: hp("3%"),
  },
  searchBox: {
    fontSize: 16,
  },
  totalShopsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: hp("1%"),
  },
  totalShopValueText: {
    marginHorizontal: wp("2%"),
    fontSize: 23,
    fontWeight: "700",
  },
  totalShopText: {
    fontSize: 22,
  },
});
