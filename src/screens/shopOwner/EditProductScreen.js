import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { ScrollView } from "react-native-gesture-handler";

class EditProductScreen extends Component {
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
  }
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
      status: 0,
    };
    this.props.AddNewProduct(product);
  };

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
      this.setState({ image: uri }), this.setState({ base64 });
    }
    console.log(uri);
  };

  componentDidMount() {
    if (this.state.status !== 1) {
      this.props.navigation.addListener("focus", () => {
        this.setState({
          productName: this.props.route.params.selectedProduct.productName,
          cp: this.props.route.params.selectedProduct.cp,
          sp: this.props.route.params.selectedProduct.sp,
          qty: this.props.route.params.selectedProduct.qty,
          details: this.props.route.params.selectedProduct.details,
          base64: this.props.route.params.selectedProduct.base64,
        });
      });
    }
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          {/* <View>
          <Text>Add product</Text>
        </View> */}

          <View style={style.registrationFormContainer}>
            <View style={style.usernameInputContainer}>
              <TextInput
                style={style.usernameInput}
                placeholder="Product Name"
                onChangeText={(text) =>
                  this.handleUpdateState("productName", text)
                }
                value={this.state.productName}
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
                    onChangeText={(text) => this.handleUpdateState("cp", text)}
                    value={this.state.cp}
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
                    onChangeText={(text) => this.handleUpdateState("sp", text)}
                    value={this.state.sp}
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
                onChangeText={(text) => this.handleUpdateState("details", text)}
                value={this.state.details}
              ></TextInput>
            </View>
            <View style={style.productImageContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.selectPicture(), this.setState({ status: 1 });
                }}
                style={style.editProductButton}
              >
                <MaterialIcons name="edit" size={26} color="#0080ff" />
              </TouchableOpacity>
              <View style={style.theProductImageContainer}>
                <Image
                  style={style.theProductImage}
                  source={{ uri: `data:image/jpg;base64,${this.state.base64}` }}
                />
              </View>
            </View>
          </View>
          <View style={style.addProductButtonContainer}>
            <TouchableOpacity style={style.addProductButton}>
              <Text style={style.addProductButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 10,
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
    marginTop: 10,
  },
  usernameInputContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginVertical: 15,
  },
  usernameInput: {
    fontSize: 17,
    marginVertical: 10,
    marginLeft: 10,
  },
  pricingText: {
    fontSize: 17,
    marginRight: 20,
  },
  pricingUnitText: {
    marginTop: 8,
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
    marginVertical: 10,
  },
  pricingInputContainer: {
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#0080FF",
    marginLeft: 10,
    marginBottom: 5,
  },
  signupButton: {
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignItems: "center",
  },
  productDetailsInputContainer: {
    borderWidth: 1,
    borderColor: "#0080ff",
    borderRadius: 10,
    paddingVertical: 30,
    marginVertical: 20,
  },
  pricingTextContainer: {
    marginTop: 10,
  },
  pricingUnitText: {
    marginTop: 10,
    marginRight: 10,
  },
  pricingInputAndTextContainer: {
    flexDirection: "column",
  },

  addProductButton: {
    marginHorizontal: 10,
    backgroundColor: "#080809",
    alignItems: "center",
    borderRadius: 10,
  },
  addProductButtonContainer: {
    marginVertical: 30,
  },
  addProductButtonText: {
    fontSize: 17,
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  editProductButton: {
    top: 150,
    marginLeft: 310,
  },
  imageSelectButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0080ff",
    marginBottom: 10,
  },
  theProductImage: {
    paddingVertical: 150,
    paddingHorizontal: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  theProductImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditProductScreen;
