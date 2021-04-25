import React, { Component } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StyleSheet, Text, View } from "react-native";

class PLReportListElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.numberContainer}>
          <Text style={style.numberText}>{this.props.number}</Text>
        </View>
        <View style={style.productNameContainer}>
          <Text style={style.productNameText}>Hp Omen Laptop</Text>
        </View>
        <View style={style.cpContainer}>
          <Text style={style.CpText}>1850</Text>
        </View>
        <View style={style.SpContainer}>
          <Text style={style.SpText}>2500</Text>
        </View>
        <View style={style.timeContainer}>
          <Text style={style.timeText}>21-07-2021 17:34</Text>
        </View>
      </View>
    );
  }
}

export default PLReportListElement;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: hp("0.4%"),
    maxHeight: hp("3%"),
  },
  numberContainer: {
    width: wp("5%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    alignItems: "center",
    paddingVertical: hp("0.3%"),
  },
  numberText: {
    fontSize: 14,
    fontWeight: "600",
  },
  productNameText: {
    fontSize: 14,
    fontWeight: "600",
  },
  productNameContainer: {
    width: wp("27.5%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    paddingVertical: hp("0.2%"),
  },
  cpContainer: {
    width: wp("16%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    alignItems: "center",
    paddingVertical: hp("0.2%"),
  },
  CpText: {
    fontSize: 14,
    fontWeight: "600",
  },
  SpContainer: {
    width: wp("16%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    alignItems: "center",
    paddingVertical: hp("0.2%"),
  },
  SpText: {
    fontSize: 14,
    fontWeight: "600",
  },
  timeContainer: {
    width: wp("30%"),
    backgroundColor: "#ebebeb",
    marginHorizontal: wp("0.3%"),
    alignItems: "center",
    paddingVertical: hp("0.2%"),
  },
  timeText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
