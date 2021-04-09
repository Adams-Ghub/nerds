import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Complaint extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.complaintAboutConatiner}>
          <Text style={style.complaintAboutText}> about </Text>
          <Text style={style.complaintCompanyText}>Cictech Elecronics Ltd</Text>
        </View>
        <View style={style.theComplaintContainer}>
          <Text style={style.theComplaintText}>Cictech Elecronics Ltd</Text>
        </View>
        <View style={style.complainantContainer}>
          <Text style={style.complaintByText}> by </Text>
          <Text style={style.complainantName}>Jones</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {},
});
