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
      ],
    };
  }

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
              <Entypo name="magnifying-glass" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={style.filterContainer}>
            <TouchableOpacity style={style.filterContainer}>
              <Fontisto name="shopping-store" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={style.filterContainer}>
              <FontAwesome5 name="luggage-cart" size={24} color="black" />
            </TouchableOpacity>
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
    marginVertical: hp("10%"),
    marginHorizontal: wp("2%"),
  },
  topSection: {
    marginHorizontal: wp("10%"),
    marginVertical: hp("2%"),
  },
  searchSection: {
    marginHorizontal: wp("4%"),
  },
  productInFlatlist: {
    marginVertical: hp("0.5%"),
  },
  flatlistContainer: {
    backgroundColor: "#F8F8F8",
  },
  product: {
    marginVertical: hp("0.5%"),
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: hp("1%"),
  },
});
