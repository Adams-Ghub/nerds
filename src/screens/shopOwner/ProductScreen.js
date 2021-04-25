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
import { connect } from "react-redux";
import ProductComponentS from "../../components/ProductComponentS";
import { getAllProducts } from "../../redux/actions/authAction";

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

  componentDidMount() {
    this.props.getAllProducts();
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
          data={this.props.products}
          renderItem={({ item }) => {
            return (
              <View style={style.productInFlatlist}>
                <ProductComponentS
                  name={item.productName}
                  sp={item.sp}
                  image={`data:image/jpg;base64,${item.base64}`}
                  product={item}
                />
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = () => {
  return { getAllProducts };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductScreen);

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
