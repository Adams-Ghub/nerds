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
import TransactionComponent from "../../components/TransactionComponent";

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.searchBoxCotainer}>
          <TextInput
            style={style.searchBox}
            placeholder="enter transaction ID to search"
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
        <View style={style.filterContainer}>
          <View style={style.shopAndProductFilterContainer}>
            <View style={style.shopFilterContainer}>
              <Text style={style.shopFilterText}>shop</Text>
              <TextInput
                placeholder="enter shop name"
                style={style.shopFilterInput}
              ></TextInput>
            </View>
            <View style={style.productFilterContainer}>
              <Text style={style.productFilterText}>product</Text>
              <TextInput
                placeholder="enter product name"
                style={style.productFilterInput}
              ></TextInput>
            </View>
          </View>
          <View style={style.dateFilterContainer}>
            <View style={style.dateFromContainer}>
              <Text style={style.dateFromText}>from</Text>
              <TextInput
                placeholder="05-03-2021"
                style={style.dateFromInput}
              ></TextInput>
            </View>
            <View style={style.dateToContainer}>
              <Text style={style.dateToText}>to</Text>
              <TextInput
                placeholder="05-04-2021"
                style={style.dateToInput}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={style.filterButtonContainer}>
          <TouchableOpacity style={style.filterButton}>
            <Text style={style.filterButtonText}>filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <TransactionComponent paymentmode="momo" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="momo" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="momo" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="cash" />
          <TransactionComponent paymentmode="momo" />
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shopFilterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  productFilterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  shopFilterInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 20,
    fontSize: 14,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 20,
  },
  productFilterInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 5,
    fontSize: 14,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 20,
  },
  dateFromContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  dateFromInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 5,
    fontSize: 14,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 20,
  },
  dateToContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  dateToInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 22,
    fontSize: 14,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 20,
  },
  productFilterInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 5,
    fontSize: 14,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 20,
  },
  filterButtonContainer: {
    marginBottom: hp("1%"),
  },
  filterButton: {
    backgroundColor: "#0080ff",
    alignItems: "center",
  },
  filterButtonText: {
    color: "#ffffff",
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
