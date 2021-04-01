import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import {
  Fontisto,
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ProductComponent from "../components/ProductComponent";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
        "hp omen laptop",
      ],
      searchText: "",

      shopColor: "black",
      productColor: "#0080FF",
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }
  shopactivation = () => {
    this.setState({ productColor: "black", shopColor: "#0080FF" });
  };

  productactivation = () => {
    this.setState({ productColor: "#0080FF", shopColor: "black" });
  };
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.topSection}>
          <View style={style.searchSection}>
            <TextInput
              onChangeText={(text) =>
                this.handleUpdateState("searchText", text)
              }
              placeholder="search by product or shop name"
              value={this.state.searchText}
              style={style.searchBox}
            ></TextInput>
            <TouchableOpacity>
              <Entypo name="magnifying-glass" size={24} color={"#888888"} />
            </TouchableOpacity>
          </View>
          <View style={style.filterContainer}>
            <View style={style.filterIcons}>
              <TouchableOpacity
                onPress={() => {
                  this.shopactivation();
                }}
              >
                <Fontisto
                  name="shopping-store"
                  size={24}
                  color={this.state.shopColor}
                />
              </TouchableOpacity>
            </View>
            <View style={style.filterIcons}>
              <TouchableOpacity
                onPress={() => {
                  this.productactivation();
                }}
              >
                <FontAwesome5
                  name="luggage-cart"
                  size={24}
                  color={this.state.productColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.flatlistContainer}>
          <FlatList
            data={this.state.name}
            renderItem={({ item }) => {
              return (
                <View style={style.productInFlatlist}>
                  <TouchableOpacity style={style.product}>
                    <ProductComponent name={item} />
                  </TouchableOpacity>
                </View>
              );
            }}
            numColumns={2}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={style.lowerSection}>
          <TouchableOpacity style={style.accountButton}>
            <View style={style.accountIconContainer}>
              <MaterialCommunityIcons name="cart" size={24} color="black" />
              <Text style={style.accountText}>my cart</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.accountButton}>
            <View style={style.accountIconContainer}>
              <AntDesign name="profile" size={24} color="black" />
              <Text style={style.accountText}>category</Text>
            </View>
            {/* <View style={style.accountTextContainer}></View> */}
          </TouchableOpacity>

          <TouchableOpacity style={style.accountButton}>
            <View style={style.accountIconContainer}>
              <FontAwesome5 name="user" size={20} color="black" />
              <Text style={style.accountText}>register</Text>
            </View>
            {/* <View style={style.accountTextContainer}></View> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default WelcomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    marginTop: hp("19%"),
    marginHorizontal: wp("2%"),
    marginBottom: hp("12%"),
  },

  searchSection: {
    flexDirection: "row",
    paddingVertical: hp("0.2%"),
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: wp("0.3%"),
    paddingHorizontal: wp("1%"),
    borderColor: "#cccccc",
    borderRadius: wp("10%"),
    marginHorizontal: hp("1%"),
  },
  searchBox: {
    fontSize: 18,
    marginRight: wp("4%"),
  },
  topSection: {
    // paddingBottom: hp("1%"),
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: hp("1%"),
    paddingLeft: wp("25%"),
    paddingBottom: hp("5%"),
  },
  filterIcons: {
    marginVertical: hp("2%"),
    marginHorizontal: wp("8%"),
  },
  flatlistContainer: {
    marginTop: wp("-10%"),
  },
  lowerSection: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: wp("10%"),
    marginVertical: hp("2%"),
  },
  accountButton: {
    flexDirection: "column",
    justifyContent: "center",
  },
  accountIconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp("1.7%"),
  },
  accountText: {
    fontSize: 10,
    // textAlign: "center",
  },

  homeText: {
    fontSize: 10,
  },
});
