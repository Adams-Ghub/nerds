import React, { Component } from "react";
import { Rating } from "react-native-ratings";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Review from "../components/Review.js";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  increaseProduct,
  addProductToCart,
  decreaseProduct,
  removeProduct,
} from "../redux/actions/authAction.js";
// import { MaterialIcons } from "@expo/vector-icons";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      quantitycheck: 0,
    };
  }
  ratingsCompleted(ratings) {
    console.log("Ratings is" + ratings);
  }

  handleButtonDisplay = () => {
    if (this.state.quantitycheck < 1) {
      return (
        <TouchableOpacity
          style={style.addToCartButton}
          onPress={() => {
            this.setState({ quantitycheck: 1 });
            let item = {
              product: this.props.route.params.product,
              qty: this.state.quantitycheck + 1,
            };
            this.props.addProductToCart(item);
            // this.props.navigation.navigate("Cart");
          }}
        >
          <View style={style.addToCartBtnAndTextContainer}>
            <MaterialIcons name="add-shopping-cart" size={24} color="#ffffff" />
            <Text style={style.addToCartText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#080809",
            borderStyle: "solid",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              let item1 = {
                product: this.props.route.params.product,
                qty: this.state.quantitycheck - 1,
              };
              this.setState({ quantitycheck: this.state.quantitycheck - 1 });
              this.props.decreaseProduct(item1);
            }}
            style={{ backgroundColor: "#080809" }}
          >
            <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{ paddingVertical: 4, fontsize: 19, fontWeight: "bold" }}
          >
            {this.state.quantitycheck}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({ quantitycheck: this.state.quantitycheck + 1 });
              let item2 = {
                product: this.props.route.params.product,
                qty: this.state.quantitycheck + 1,
              };
              this.props.increaseProduct(item2);
            }}
            style={{ backgroundColor: "#080809" }}
          >
            <MaterialIcons name="arrow-drop-up" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      );
    }
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (this.props.auth) {
                this.props.navigation.navigate("CustomerDashboard");
              } else {
                this.props.navigation.navigate("Welcome");
              }
            }}
            style={{ marginHorizontal: 15 }}
          >
            <AntDesign name="arrowleft" size={24} color="#ffffff" />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            {/* <TouchableOpacity style={{ marginRight: 15 }}>
              <FontAwesome5 name="search" size={20} color="#ffffff" />
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Cart");
              }}
              style={{ marginRight: 5 }}
            >
              <MaterialCommunityIcons name="cart" size={24} color="#ffffff" />
            </TouchableOpacity>
            <View>
              <Text style={{ color: "#fff", marginRight: 15 }}>
                {this.props.thecart.length + " item(s)"}
              </Text>
            </View>
          </View>
        );
      },
    });
  }

  componentDidUpdate() {
    this.props.navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (this.props.auth) {
                this.props.navigation.navigate("CustomerDashboard");
              } else {
                this.props.navigation.navigate("Welcome");
              }
            }}
            style={{ marginHorizontal: 15 }}
          >
            <AntDesign name="arrowleft" size={24} color="#ffffff" />
          </TouchableOpacity>
        );
      },

      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            {/* <TouchableOpacity style={{ marginRight: 15 }}>
              <FontAwesome5 name="search" size={20} color="#ffffff" />
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Cart");
              }}
              style={{ marginRight: 5 }}
            >
              <MaterialCommunityIcons name="cart" size={24} color="#ffffff" />
            </TouchableOpacity>
            <View>
              <Text style={{ color: "#fff", marginRight: 15 }}>
                {this.props.thecart.length + " item(s)"}
              </Text>
            </View>
          </View>
        );
      },
    });
  }

  render() {
    console.log(this.props.thecart.length);
    return (
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.ProductImageSection}>
            <Image
              style={style.productImage}
              source={{
                uri: `data:image/jpg;base64,${this.props.route.params.product.base64}`,
              }}
            />
          </View>
          <View style={style.basicDetailSection}>
            <View style={style.product}>
              <Text style={style.productNameText}>
                {this.props.route.params.product.productName}
              </Text>
              <Text style={style.priceText}>
                {"GH¢" + this.props.route.params.product.sp}
              </Text>
            </View>
            <View style={style.shopNameContainer}>
              <Text style={style.shopText}>Shop:</Text>
              <Text style={style.shopNameText}>Cictech Electronics Ltd.</Text>
            </View>
            <View style={style.ratingSection}>
              <View style={style.ratingContainer}>
                <Rating
                  type="star"
                  tintColor="#eeeeee"
                  onFinishRating={this.ratingsCompleted}
                  imageSize={23}
                  jumpValue={1.0}
                />
              </View>

              <Text style={style.totalRatingValueText}>(234 ratings)</Text>
            </View>
          </View>
          <View style={style.deliveryInformationSection}>
            <Text style={style.deliveryInformationText}>
              Delivery Information
            </Text>
            <View style={style.chooseLocationSection}>
              <Text style={style.chooseLocationText}>Choose Location</Text>
              <TouchableOpacity style={style.picklocationButton}>
                <Text style={style.picklocationText}>Pick my location</Text>
              </TouchableOpacity>
              <View style={style.pickedLocationContainer}>
                <Text style={style.location}>Kasoa</Text>
                {/* <Text>(0.555555, -0.45555)</Text> */}
              </View>
            </View>
          </View>
          <View style={style.productDetailSection}>
            <Text style={style.productDetailText}>Product Details</Text>
            <View style={style.descriptionSection}>
              <Text style={style.descriptionText}>Description</Text>
              <Text style={style.theDescriptionText}>
                {this.props.route.params.product.details}
              </Text>
            </View>
          </View>
          <View style={style.customerFeedbackSection}>
            <Text style={style.customerFeedbackText}>Customer Feedback </Text>
            <View>
              <Text style={style.productRatingsReviewText}>
                Product Ratings & Review
              </Text>
            </View>
            <View style={style.theReviewContainer}>
              <Review />
              <Review />
              <Review />
            </View>
          </View>
        </ScrollView>
        <View style={style.addToCartButtonContainer}>
          {this.handleButtonDisplay()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thecart: state.cart,
    auth: state.user,
  };
};
const mapDispatchToProps = () => {
  return {
    addProductToCart,
    increaseProduct,
    decreaseProduct,
    removeProduct,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(ProductDetails);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 15,
    marginHorizontal: 15,
  },
  basicDetailSection: {
    marginBottom: 10,
  },
  ProductImageSection: {
    alignItems: "center",
  },
  productImage: {
    width: 340,
    height: 320,

    borderRadius: 10,
  },
  productNameText: {
    fontSize: 23,
  },
  priceText: {
    fontWeight: "700",
    fontSize: 18,
  },
  shopNameContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  shopText: {
    color: "#080809",
    fontSize: 16,
    fontWeight: "700",
  },
  shopNameText: {
    fontSize: 16,
    color: "#080809",
  },
  totalRatingValueText: {
    fontSize: 13,
    color: "#080809",
  },
  ratingContainer: {
    alignItems: "flex-start",
  },
  addToCartButtonContainer: {
    marginTop: 5,
  },
  addToCartBtnAndTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  addToCartText: {
    marginLeft: 5,
    fontSize: 19,
    fontWeight: "700",
    color: "#ffffff",
  },
  addToCartButton: {
    backgroundColor: "#080809",
    borderRadius: 8,
    paddingVertical: 8,
  },
  deliveryInformationSection: {
    borderStyle: "solid",
    marginBottom: 10,
  },
  deliveryInformationText: {
    fontSize: 18,
    color: "#aaaaaa",
    marginBottom: 5,
  },
  picklocationButton: {
    backgroundColor: "#080809",
    paddingVertical: 10,
    borderRadius: 10,
  },
  picklocationText: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
  pickedLocationContainer: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  chooseLocationSection: {
    backgroundColor: "#ededed",
    padding: 5,
  },
  chooseLocationText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  productDetailSection: {
    marginVertical: 5,
  },
  productDetailText: {
    fontSize: 18,
    color: "#aaaaaa",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  customerFeedbaackSection: {
    marginVertical: 5,
  },
  customerFeedbackText: {
    fontSize: 18,
    color: "#aaaaaa",
    marginBottom: 5,
  },
  productRatingsReviewText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  theReviewContainer: {
    borderStyle: "solid",
    borderTopWidth: 2,
    borderColor: "#ccc",
  },
  product: {
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: "#EEEEEE",
    borderWidth: 2,
  },
});
