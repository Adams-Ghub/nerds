import React from "react";
import { SearchBar } from "react-native-elements";

export default class OrderSearch extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="search product by name"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
        round={true}
        containerStyle={{
          backgroundColor: "transparent",
          //   backgroundColor: "#ffffff",
          //   width: 50,
          shadowColor: "red",
        }}
        inputContainerStyle={{}}
      />
    );
  }
}
