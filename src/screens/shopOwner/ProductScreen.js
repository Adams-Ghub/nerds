import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProductComponentS from "../../components/ProductComponentS";

class ProductScreen extends Component {
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
    };
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.filterContainer}>
          <View style={style.searchBoxCotainer}>
            <TouchableOpacity style={style.searchBoxButton}>
              <MaterialCommunityIcons
                style={{ marginHorizontal: wp("3%"), marginTop: hp("0.5%") }}
                name="magnify"
                size={20}
                color="#cccccc"
              />
            </TouchableOpacity>
            <TextInput
              style={style.searchBox}
              placeholder="enter product name to search"
            ></TextInput>
          </View>
        </View>
        <FlatList
          data={this.state.name}
          renderItem={({ item }) => {
            return (
              <View style={style.productInFlatlist}>
                <ProductComponentS name={item} />
              </View>
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("AddProduct");
          }}
          style={style.addProductButton}
        >
          <Ionicons
            style={style.addProductButtonIcon}
            name="add-sharp"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default ProductScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: wp("2%"),
  },

  addProductButton: {
    backgroundColor: "#0080ff",
    width: wp("10%"),
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp("5%"),
    position: "absolute",
    top: hp("81%"),
    left: wp("84%"),
  },
  filterContainer: {
    marginVertical: hp("3%"),
  },
  searchBoxCotainer: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: wp("0.1%"),
    borderRadius: wp("2%"),
    paddingHorizontal: wp("2%"),
  },
});