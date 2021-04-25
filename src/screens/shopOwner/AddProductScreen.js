import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { AddNewProduct } from "../../redux/actions/authAction";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

class AddProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      base64: null,
      productName: "",
      cp: "",
      sp: "",
      qty: "",
      details: "",
    };

    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    const {
      cancelled,
      uri,
      base64,
    } = await ImagePicker.launchImageLibraryAsync({
      aspect: [21, 21],
      base64: true,
      allowsEditing: true,
      quality: 1,
    });
    if (!cancelled) {
      this.setState({ image: uri });
      this.setState({ base64: base64 });
      console.log(base64);
    }
  };
  //Updates the Input Boxes
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleAddProduct = () => {
    const product = {
      productName: this.state.productName,
      cp: this.state.cp,
      sp: this.state.sp,
      qty: this.state.qty,
      details: this.state.details,
      base64: this.state.base64,
      id: uuid(),
    };
    console.log(product.id);
    this.props.AddNewProduct(product);
  };
  render() {
    return (
      <View style={style.container}>
        {/* <View>
          <Text>Add product</Text>
        </View> */}
        <ScrollView>
          <View style={style.registrationFormContainer}>
            <View style={style.usernameInputContainer}>
              <TextInput
                style={style.usernameInput}
                placeholder="Product Name"
                value={this.state.productName}
                onChangeText={(text) =>
                  this.handleUpdateState("productName", text)
                }
              ></TextInput>
            </View>
            <View style={style.pricingContainer}>
              <View style={style.pricingInputAndTextContainer}>
                <View style={style.pricingTextContainer}>
                  <Text style={style.pricingText}>Cost Price:</Text>
                </View>
                <View style={style.pricingInputContainer}>
                  <Text style={style.pricingUnitText}>GH¢</Text>
                  <TextInput
                    style={style.pricingInput}
                    placeholder="eg. 1000"
                    keyboardType="number-pad"
                    value={this.state.cp}
                    onChangeText={(text) => this.handleUpdateState("cp", text)}
                  ></TextInput>
                </View>
              </View>
              <View style={style.pricingInputAndTextContainer}>
                <View style={style.pricingTextContainer}>
                  <Text style={style.pricingText}>Selling Price:</Text>
                </View>
                <View style={style.pricingInputContainer}>
                  <Text style={style.pricingUnitText}>GH¢</Text>
                  <TextInput
                    style={style.pricingInput}
                    placeholder="eg. 1200"
                    keyboardType="number-pad"
                    value={this.state.sp}
                    onChangeText={(text) => this.handleUpdateState("sp", text)}
                  ></TextInput>
                </View>
              </View>
              <View style={style.pricingInputAndTextContainer}>
                <View style={style.pricingTextContainer}>
                  <Text style={style.pricingText}>Quantity:</Text>
                </View>
                <View style={style.pricingInputContainer}>
                  <TextInput
                    style={style.pricingInput}
                    placeholder="eg. 100"
                    keyboardType="number-pad"
                    value={this.state.qty}
                    onChangeText={(text) => this.handleUpdateState("qty", text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={style.productDetailsInputContainer}>
              <TextInput
                style={style.usernameInput}
                placeholder="Product Details"
                multiline={true}
                value={this.state.details}
                onChangeText={(text) => this.handleUpdateState("details", text)}
              ></TextInput>
            </View>
            <View style={style.productImageContainer}>
              <TouchableOpacity
                onPress={this.selectPicture}
                style={style.selectProductImageButton}
              >
                <Text style={style.imageSelectButtonText}>select image</Text>
              </TouchableOpacity>
              <View style={style.theProductImageContainer}>
                <Image
                  style={style.theProductImage}
                  source={{ uri: this.state.image }}
                />
              </View>
            </View>

            <View style={style.addProductButtonContainer}>
              <TouchableOpacity
                onPress={this.handleAddProduct}
                style={style.addProductButton}
              >
                <Text style={style.addProductButtonText}>Add product</Text>
              </TouchableOpacity>
            </View>
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
    AddNewProduct,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(AddProductScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("5%"),
    marginHorizontal: wp("5%"),
  },
  welcomeSectionContainer: {
    alignItems: "center",
  },

  welcomeMessage: {
    fontSize: 36,
    fontWeight: "200",
    marginBottom: 70,
  },
  createMessage: {
    fontSize: 22,
    fontWeight: "normal",
    marginBottom: 0,
  },
  registrationFormContainer: {
    marginTop: hp("1%"),
  },
  usernameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: 15,
  },
  usernameInput: {
    fontSize: 17,
    marginVertical: hp("1%"),
    marginLeft: wp("3%"),
  },
  pricingText: {
    fontSize: 17,
    marginRight: wp("1.5%"),
  },
  pricingUnitText: {
    marginTop: hp("0.2%"),
  },
  pricingInput: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 2,
    marginLeft: 1,
  },
  pricingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("1%"),
  },
  pricingInputContainer: {
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginLeft: wp("1%"),
    marginBottom: 5,
  },
  signupButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  productDetailsInputContainer: {
    borderWidth: wp("0.1%"),
    borderColor: "#0080ff",
    borderRadius: wp("2%"),
    minHeight: wp("35%"),
    marginVertical: hp("2.5%"),
  },
  pricingTextContainer: {
    marginTop: hp("1%"),
  },
  pricingUnitText: {
    marginTop: hp("1%"),
    marginRight: wp("1%"),
  },
  pricingInputAndTextContainer: {
    flexDirection: "column",
  },

  addProductButton: {
    marginHorizontal: 10,
    backgroundColor: "#0080ff",
    alignItems: "center",
    borderRadius: wp("2%"),
  },
  addProductButtonContainer: {
    marginVertical: hp("2%"),
  },
  addProductButtonText: {
    fontSize: 17,
    color: "#ffffff",
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1%"),
  },
  selectProductImageButton: {
    alignItems: "center",
  },
  imageSelectButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0080ff",
    marginBottom: hp("0.5%"),
  },
  theProductImage: {
    width: wp("70%"),
    height: wp("70%"),
    borderRadius: wp("4% "),
    borderWidth: wp("0.5"),
    borderColor: "#dddddd",
  },
  theProductImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
