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
  Ionicons,
  MaterialIcons,
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

      shopColor: "#ffffff",
      productColor: "#ffffff",
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }
  shopactivation = () => {
    this.setState({ productColor: "#ffffff", shopColor: "#ffffff" });
  };

  productactivation = () => {
    this.setState({ productColor: "#ffffff", shopColor: "#ffffff" });
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
              placeholderTextColor="#cccbc8"
            ></TextInput>
            <TouchableOpacity>
              <Entypo name="magnifying-glass" size={24} color={"#ffffff"} />
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
                  <TouchableOpacity
                    style={style.product}
                    onPress={() => {
                      this.props.navigation.navigate("ProductDetails");
                    }}
                  >
                    <ProductComponent name={item} />
                  </TouchableOpacity>
                </View>
              );
            }}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{ marginBottom: 100 }}
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
    backgroundColor: "#080809",
    paddingTop: hp("17%"),
  },

  searchSection: {
    flexDirection: "row",
    paddingVertical: hp("0.2%"),
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: wp("0.3%"),
    paddingHorizontal: wp("1%"),
    borderColor: "#cccccc",
    backgroundColor: "rgba(165, 161, 157, 0.5)",
    borderRadius: 10,
    marginHorizontal: 7,
  },
  searchBox: {
    fontSize: 18,
    marginRight: wp("4%"),
    paddingVertical: 8,
  },
  topSection: {
    backgroundColor: "#080809",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: hp("1%"),
    paddingLeft: wp("25%"),
    paddingBottom: 5,
  },
  filterIcons: {
    marginVertical: hp("2%"),
    marginHorizontal: wp("8%"),
  },
  flatlistContainer: {
    backgroundColor: "#080809",
    paddingBottom: 20,
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
  },
  homeText: {
    fontSize: 10,
  },
  text: {},
});
