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
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <View style={style.container}>
        <ScrollView>
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
              numColumns={2}
              keyExtractor={(item, index) => index}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
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
    marginTop: hp("5%"),
    marginHorizontal: wp("2%"),
    marginBottom: hp("4%"),
  },

  searchSection: {
    flexDirection: "row",
    paddingVertical: hp("0.3%"),
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: wp("0.3%"),
    paddingHorizontal: wp("1%"),
    borderColor: "#cccccc",
    borderRadius: wp("10%"),
    marginVertical: hp("1%"),
    marginHorizontal: hp("1%"),
  },
  searchBox: {
    fontSize: 18,
    marginRight: wp("4%"),
  },
  topSection: {},

  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: hp("1%"),
    paddingLeft: wp("25%"),
    paddingBottom: hp("1%"),
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
  },

  homeText: {
    fontSize: 10,
  },
  flatlistContainer: {
    paddingBottom: 20,
  },
});
