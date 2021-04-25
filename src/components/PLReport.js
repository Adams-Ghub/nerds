import React, { Component } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import PLReportListElement from "./PLReportListElement";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getAllOrders } from "../redux/actions/authAction.js";

class PLReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllOrders();
  }
  render() {
    // let tcp = 0;
    // for (i = 0; i >= this.props.orders.length - 1; i++) {
    //   tcp =
    //     tcp +
    //     this.props.orders[i].orderedProducts.qty *
    //       this.props.orders[i].orderedProducts.cp;
    // }
    console.log(this.props.orders);
    return (
      <View style={style.container}>
        <View style={style.allFiltersContainer}>
          <View style={style.filterByProductContainer}>
            <Text>filter by product</Text>
            <TextInput
              style={style.filterProductNameInput}
              placeholder="product name"
            ></TextInput>
          </View>
          <View style={style.filterByCategoryContainer}>
            <Text>filter by category</Text>
            <TextInput
              style={style.filterCategoryInput}
              placeholder="category"
            ></TextInput>
          </View>
          <View style={style.dateFilterContainer}>
            <View style={style.dateFilterFromContainer}>
              <Text>from</Text>
              <TextInput
                style={style.filterDateInput}
                placeholder="25-0-2021"
              ></TextInput>
            </View>
            <View style={style.dateFilterFromContainer}>
              <Text>to</Text>
              <TextInput
                style={style.filterDateInput}
                placeholder="27-03-2021"
              ></TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity style={style.filterButton}>
          <Text style={style.filterText}>filter</Text>
        </TouchableOpacity>
        <View style={style.transactionListHeaderContainer}>
          <View style={style.productNameContainer}>
            <Text style={style.productNameText}>PRODUCTS</Text>
          </View>
          <View style={style.cpContainer}>
            <Text style={style.CpText}>CP(GH¢)</Text>
          </View>
          <View style={style.SpContainer}>
            <Text style={style.SpText}>SP(GH¢)</Text>
          </View>
          <View style={style.qtyContainer}>
            <Text style={style.qtyText}>Qty</Text>
          </View>
          <View style={style.timeContainer}>
            <Text style={style.timeText}>TIME</Text>
          </View>
        </View>

        {/* <Text>transaction list</Text> */}
        <FlatList
          style={style.flatlistContainer}
          data={this.props.orders}
          renderItem={({ item }) => {
            return (
              <View style={style.productInFlatlist}>
                <TouchableOpacity style={style.product}>
                  <PLReportListElement
                    number={item.index}
                    name={item.orderedProducts.name}
                    cp={item.orderedProducts.cp}
                    sp={item.orderedProducts.sp}
                    qty={item.orderedProducts.qty}
                    time={item.time.toDate().toLocaleTimeString("e-US")}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />

        <View style={style.horizontalLineSeparator}></View>
        <View style={style.infoSectionContainer}>
          <View style={style.theTotalFieldColumnContainer}>
            <View>
              <Text style={style.theTotalFieldText}>total selling price</Text>
            </View>
            <View style={style.totalCPTextContainer}>
              <Text style={style.theTotalFieldText}>total cost price</Text>
            </View>
            <View style={style.grossProfitTextContainer}>
              <Text style={style.grossProfitText}>gross profit</Text>
            </View>
          </View>
          <View style={style.theTotalValueColumnContainer}>
            <View style={style.cediUnitValueTextContainer}>
              <Text style={style.cediUnitText}>GH¢</Text>
              <Text style={style.totalSPValueText}>14,400</Text>
            </View>
            <View style={style.cediUnitValueTextContainer}>
              <Text style={style.cediUnitText}>GH¢</Text>
              <Text style={style.totalCPValueText}>12,400</Text>
            </View>

            <View style={style.grossCediUnitValueTextContainer}>
              <Text style={style.cediUnitText}>GH¢</Text>
              <Text style={style.grossProfitValueText}>2,000</Text>
            </View>
          </View>
        </View>
        <View style={style.toolsContainer}>
          <TouchableOpacity style={style.saveButton}>
            <Feather name="printer" size={24} color="#0080ff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { orders: state.orders };
};
const mapDispatchToProps = () => {
  return { getAllOrders };
};
export default connect(mapStateToProps, mapDispatchToProps())(PLReport);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("1%"),
    marginHorizontal: wp("2%"),
  },
  allFiltersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C4C4C4",
    padding: wp("1.5%"),
  },
  filterProductNameInput: {
    borderWidth: wp("0.2%"),
    borderRadius: 4,
    paddingHorizontal: wp("0.9%"),
  },
  filterCategoryInput: {
    borderWidth: wp("0.2%"),
    borderRadius: 4,
    paddingHorizontal: wp("0.9%"),
  },
  dateFilterFromContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    alignItems: "center",
    backgroundColor: "#080809",
    marginBottom: hp("0.5%"),
  },
  filterText: {
    fontSize: 17,
    color: "#ffffff",
  },
  transactionListHeaderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: hp("0.6%"),
    marginTop: hp("2%"),
  },

  productNameText: {
    fontSize: 15,
    fontWeight: "700",
    paddingHorizontal: wp("2%"),
  },
  productNameContainer: {
    width: wp("33%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    paddingVertical: hp("0.5%"),
  },
  cpContainer: {
    width: wp("16%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    alignItems: "center",
    paddingVertical: hp("0.5%"),
  },
  CpText: {
    fontSize: 15,
    fontWeight: "700",
  },
  SpContainer: {
    width: wp("16%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    alignItems: "center",
    paddingVertical: hp("0.5%"),
  },
  SpText: {
    fontSize: 15,
    fontWeight: "700",
  },
  qtyContainer: {
    width: wp("9%"),
    marginHorizontal: wp("0.3%"),
    backgroundColor: "#ebebeb",
    alignItems: "center",
    paddingVertical: hp("0.5%"),
  },
  qtyText: {
    fontSize: 15,
    fontWeight: "700",
  },
  timeContainer: {
    width: wp("19%"),
    backgroundColor: "#ebebeb",
    marginHorizontal: wp("0.3%"),
    alignItems: "center",
    paddingVertical: hp("0.5%"),
  },
  timeText: {
    fontSize: 15,
    fontWeight: "700",
  },
  infoSectionContainer: {
    flexDirection: "row",
    marginLeft: wp("25%"),
  },
  horizontalLineSeparator: {
    borderStyle: "solid",
    borderTopWidth: hp("0.2%"),
    borderTopColor: "#dddddd",
    marginVertical: hp("0.5%"),
  },
  theTotalValueColumnContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  theTotalFieldColumnContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: wp("2%"),
  },
  cediUnitText: {
    fontSize: 16,
    fontWeight: "700",
  },
  cediUnitValueTextContainer: {
    flexDirection: "row",
  },
  grossProfitText: {
    fontSize: 16,
    paddingTop: hp("0.4%"),
  },
  grossCediUnitValueTextContainer: {
    flexDirection: "row",
    borderTopWidth: wp("0.2%"),
  },

  toolsContainer: {
    borderStyle: "solid",
    borderTopWidth: hp("0.2%"),
    borderTopColor: "#ddd",
    marginVertical: hp("1%"),
    alignItems: "center",
  },
  saveButton: {
    marginVertical: hp("0.6%"),
  },
});
