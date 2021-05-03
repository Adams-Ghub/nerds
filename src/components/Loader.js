import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import DrawerItem from "./DrawerItem";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authAction";
import { TouchableHighlightBase } from "react-native";

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.logout();
  // }
  // componentDidUpdate() {

  // }
  componentWillUnmount() {
    this.props.navigation.navigate("UserSelection");
  }
  render() {
    this.props.logout();

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

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = () => {
  return {
    logout,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Loader);
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
