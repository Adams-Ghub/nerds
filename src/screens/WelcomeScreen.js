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
import { Fontisto, Entypo, FontAwesome5 } from "@expo/vector-icons";
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

      shopColor: "black",
      productColor: "#0080FF",
    };
  }
  shopactivation = () => {
    this.setState({ productColor: "black", shopColor: "#0080FF" });
  };

  productactivation = () => {
    this.setState({ productColor: "#0080FF", shopColor: "black" });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.topSection}>
          <View style={style.searchSection}>
            <TextInput
              placeholder="search by product or shop name"
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
        <View>
          <FlatList
            style={style.flatlistContainer}
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
        <View style={style.lowerSection}></View>
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
    marginVertical: hp("15%"),
    marginHorizontal: wp("2%"),
  },

  searchSection: {
    flexDirection: "row",
    paddingVertical: hp("2%"),
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  searchBox: {
    borderStyle: "solid",
    borderWidth: wp("0.3%"),
    paddingHorizontal: wp("5%"),
    borderColor: "#cccccc",
    borderRadius: wp("10%"),
    marginHorizontal: hp("1%"),
    fontSize: 17,
  },
  topSection: {
    marginBottom: hp("1%"),
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: hp("1%"),
    backgroundColor: "#ffffff",
    paddingLeft: wp("25%"),
  },
  filterIcons: {
    marginVertical: hp("2%"),
    marginHorizontal: wp("8%"),
  },
});
