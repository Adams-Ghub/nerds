import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import DrawerItem from "./DrawerItem";

export default class Loader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    {
      setTimeout(() => {
        this.props.navigation.navigate("UserSelection");
      }, 2000);
    }
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View>
          <ActivityIndicator size="large" />
          <Text>Logging Out...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
