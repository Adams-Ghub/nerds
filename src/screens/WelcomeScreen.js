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
import { connect } from "react-redux";
import { getAllProducts } from "../redux/actions/authAction";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
        "GUCCI Bag",
      ],
      searchText: "",

      shopColor: "#5E5A80",
      productColor: "#5E5A80",
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }
  shopactivation = () => {
    this.setState({ productColor: "#080808", shopColor: "#080809" });
  };

  productactivation = () => {
    this.setState({ productColor: "#080809", shopColor: "#080809" });
  };
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <View style={style.container}>
        {/* <View style={style.topSection}>
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
                <Entypo name="magnifying-glass" size={24} color={"#888888"} /> */}

        <View style={style.topSection}>
          <View style={style.searchSection}>
            <TextInput
              onChangeText={(text) =>
                this.handleUpdateState("searchText", text)
              }
              placeholder="search by product or shop name"
              value={this.state.searchText}
              style={style.searchBox}
              placeholderTextColor="#808080"
            ></TextInput>
            <View style={style.searchIcon}>
              <TouchableOpacity>
                <Entypo
                  name="magnifying-glass"
                  size={20}
                  color={"#808080"}
                  paddingTop={10}
                />
              </TouchableOpacity>
            </View>
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
            {/* <View style={style.filterContainer}>
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
              </View> */}
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
            data={this.props.products}
            renderItem={({ item }) => {
              return (
                <View style={style.productInFlatlist}>
                  <TouchableOpacity
                    style={style.product}
                    onPress={() => {
                      this.props.navigation.navigate("ProductDetails");
                    }}
                  >
                    <ProductComponent
                      name={item.productName}
                      sp={item.sp}
                      image={`data:image/jpg;base64,${item.base64}`}
                    />
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
        {/* </ScrollView>

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
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = () => {
  return {
    getAllProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(WelcomeScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

    // marginTop: hp("5%"),
    // marginHorizontal: wp("2%"),
    // marginBottom: hp("4%"),

    backgroundColor: "#FFFFFF",
    paddingTop: 100,
  },

  searchSection: {
    flexDirection: "row",

    paddingVertical: 3,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    paddingHorizontal: wp("1%"),

    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  searchBox: {
    fontSize: 18,
    marginRight: 10,
    paddingVertical: 8,
  },

  topSection: {
    backgroundColor: "#FFFFFF",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: hp("1%"),
    paddingLeft: wp("25%"),

    paddingBottom: 5,
  },
  filterIcons: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  flatlistContainer: {
    backgroundColor: "#FFFFFF",
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
  },
  accountText: {
    fontSize: 10,
  },
  homeText: {
    fontSize: 10,
  },
  searchIcon: {
    marginTop: 10,
    marginHorizontal: 7,
  },
});
