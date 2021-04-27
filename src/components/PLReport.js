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
  Platform,
} from "react-native";
import PLReportListElement from "./PLReportListElement";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

class PLReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: new Date(),
      fromMode: "date",
      fromShow: false,
      toDate: new Date(),
      toMode: "date",
      toShow: false,
    };
    // this.onChange = this.onChange.bind(this);
    // this.setFromMode = this.setFromMode.bind(this);
    // this.showDatepicker = this.showDatepicker.bind(this);1598051730000
  }

  // showTimepicker = () => {
  //   this.setState({ mode: 'time'});
  //   };

  //   return (
  //     <View>
  //       <View>
  //         <Button onPress={showDatepicker} title="Show date picker!" />
  //       </View>
  //       <View>
  //         <Button onPress={showTimepicker} title="Show time picker!" />
  //       </View>
  //       {show && (
  //         <DateTimePicker
  //           testID="dateTimePicker"
  //           value={date}
  //           mode={mode}
  //           is24Hour={true}
  //           display="default"
  //           onChange={onChange}
  //         />
  //       )}
  //     </View>
  //   );
  // };

  render() {
    const setFromDate = (event, selectedDate) => {
      const currentDate = selectedDate;
      this.setState({ fromShow: Platform.OS === "ios" });
      this.setState({ fromDate: currentDate });
    };

    const setFromMode = (currentMode) => {
      this.setState({ fromShow: true });
      this.setState({ fromMode: currentMode });
    };

    const showFromDatepicker = () => {
      setFromMode("date");
    };

    const setToDate = (event, selectedDate) => {
      const currentDate = selectedDate;
      this.setState({ toShow: Platform.OS === "ios" });
      this.setState({ toDate: currentDate });
    };

    const setToMode = (currentMode) => {
      this.setState({ toShow: true });
      this.setState({ toMode: currentMode });
    };

    const showToDatepicker = () => {
      setToMode("date");
    };

    console.log(this.state.date);
    return (
      <View style={style.container}>
        <View style={style.Heading}>
          <Text style={style.companyNameText}>Cictech Electronics </Text>
          <Text style={style.profitLossText}>Profit & Loss </Text>
          <View style={style.allDateContainer}>
            <View style={style.dateFromContainer}>
              <Text>From:</Text>
              <TouchableOpacity
                style={style.dateFromTextContainer}
                onPress={showFromDatepicker}
              >
                <Text style={style.dateFromText}>
                  {this.state.fromDate.toDateString()}
                </Text>
              </TouchableOpacity>
              {this.state.fromShow && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.fromDate}
                  mode={this.state.fromMode}
                  is24Hour={true}
                  display="default"
                  onChange={setFromDate}
                />
              )}
            </View>
            <View style={style.dateFromContainer}>
              <Text>To:</Text>
              <TouchableOpacity
                style={style.dateFromTextContainer}
                onPress={showToDatepicker}
              >
                <Text style={style.dateFromText}>
                  {this.state.toDate.toDateString()}
                </Text>
              </TouchableOpacity>
              {this.state.toShow && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.toDate}
                  mode={this.state.toMode}
                  is24Hour={true}
                  display="default"
                  onChange={setToDate}
                />
              )}
            </View>
          </View>
        </View>

        <View style={style.PLReportBody}>
          <View style={style.mainHeaders}>
            <Text style={style.mainHeadersText}>Income</Text>
          </View>

          <View style={style.subHeaders}>
            <Text style={style.subHeadersText}>Online product sale</Text>
            <Text>20000</Text>
          </View>
          <View style={style.subHeaders}>
            <Text style={style.subHeadersText}>Offline product sale</Text>
            <Text>20000</Text>
          </View>
          <View style={style.subHeaders}>
            <Text style={style.subHeadersText}>Other Income</Text>
            <Text>2000</Text>
          </View>
          <View style={style.mainHeaders}>
            <Text style={style.mainHeadersText}>Total Income</Text>
            <Text>40000</Text>
          </View>
          <View style={style.mainHeaders}>
            <Text style={style.mainHeadersText}>Cost of Goods Sold(COGS)</Text>
          </View>
          <View style={style.subHeaders}>
            <Text style={style.subHeadersText}>Cost of Goods Sold</Text>
            <Text>29000</Text>
          </View>
          <View style={style.mainHeaders}>
            <Text style={style.mainHeadersText}>Total COGS</Text>
            <Text>29000</Text>
          </View>
          <View style={style.biggerMainHeaders}>
            <Text style={style.biggerMainHeadersText}>Gross Profit</Text>
            <Text>11000</Text>
          </View>
          <View style={style.mainHeaders}>
            <Text style={style.mainHeadersText}>Expenses</Text>
          </View>
          <View style={style.mainHeaders}>
            <Text style={style.mainHeadersText}>Total Expenses</Text>
            <Text>11000</Text>
          </View>
          <View style={style.biggerMainHeaders}>
            <Text style={style.biggerMainHeadersText}>Net Income</Text>
            <Text>11000</Text>
          </View>
        </View>

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
              <Text style={style.totalSPValueText}>122344</Text>
            </View>
            <View style={style.cediUnitValueTextContainer}>
              <Text style={style.cediUnitText}>GH¢</Text>
              <Text style={style.totalCPValueText}>122344</Text>
            </View>

            <View style={style.grossCediUnitValueTextContainer}>
              <Text style={style.cediUnitText}>GH¢</Text>
              <Text style={style.grossProfitValueText}>122344</Text>
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

export default PLReport;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("6%"),
    marginHorizontal: wp("2%"),
  },
  biggerMainHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  biggerMainHeadersText: {
    fontSize: 18,
  },
  mainHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },

  subHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
  },
  subHeadersText: {
    fontSize: 18,
  },
  allDateContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  dateFromTextContainer: {
    marginLeft: 5,
  },
  companyNameText: {
    fontSize: 27,
    textAlign: "center",
  },
  profitLossText: {
    fontSize: 23,
    textAlign: "center",
  },

  dateFromContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  Heading: {
    marginBottom: 10,
    borderStyle: "solid",
    borderBottomColor: "#808080",
    borderBottomWidth: 2,
  },
  mainHeadersText: {
    fontSize: 18,
    fontWeight: "600",
  },

  PLReportBody: {
    marginHorizontal: 10,
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

  timeContainer: {
    width: wp("30%"),
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
