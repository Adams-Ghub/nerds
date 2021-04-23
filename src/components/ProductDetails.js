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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Review from "../components/Review.js";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          product: {},
          qty: 2,
        },
      ],
      quantity: 0,
    };
  }
  ratingsCompleted(ratings) {
    console.log("Ratings is" + ratings);
  }

  summing = () => {
    let sum = 0;
    let cart = this.state.cart;
    for (i = 0; i >= this.state.cart.length - 1; i++) {
      sum = Number(sum + cart[i].qty);
    }
    return sum;
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginRight: 15,
            }}
          >
            {/* <TouchableOpacity style={{ marginRight: 15 }}>
              <FontAwesome5 name="search" size={20} color="#ffffff" />
            </TouchableOpacity> */}
            <TouchableOpacity style={{ marginRight: 3 }}>
              <MaterialCommunityIcons name="cart" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Text style={{ color: "#fff" }}>
              {this.state.quantity + " item(s)"}
            </Text>
          </View>
        );
      },
    });
  }

  render() {
    let sum = () => {};

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
            <Text style={style.productNameText}>
              {this.props.route.params.product.productName}
            </Text>
            <Text style={style.priceText}>
              {"GH¢ " + this.props.route.params.product.sp}
            </Text>
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
              <Text style={style.chooseLocationText}>choose loacation</Text>
              <TouchableOpacity style={style.picklocationButton}>
                <Text style={style.picklocationText}>Pick my location</Text>
              </TouchableOpacity>
              <View style={style.pickedLocationContainer}>
                <Text>Kasoa</Text>
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
          <TouchableOpacity
            style={style.addToCartButton}
            onPress={() => {
              this.summing;
            }}
          >
            <View style={style.addToCartBtnAndTextContainer}>
              <MaterialIcons
                name="add-shopping-cart"
                size={24}
                color="#ffffff"
              />
              <Text style={style.addToCartText}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProductDetails;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: hp("2%"),
    marginHorizontal: wp("6%"),
  },
  basicDetailSection: {
    marginBottom: hp("3%"),
  },
  ProductImageSection: {
    alignItems: "center",
  },
  productImage: {
    width: wp("88%"),
    height: hp("45%"),
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
  },
  shopText: {
    color: "#0080ff",
    fontSize: 16,
    fontWeight: "700",
  },
  shopNameText: {
    fontSize: 16,
    color: "#0080ff",
    marginLeft: wp("1.5%"),
  },
  totalRatingValueText: {
    fontSize: 13,
    color: "#0080ff",
  },
  ratingContainer: {
    alignItems: "flex-start",
  },
  addToCartButtonContainer: {
    marginTop: hp("2%"),
  },
  addToCartBtnAndTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  addToCartText: {
    marginLeft: wp("3%"),
    fontSize: 19,
    fontWeight: "700",
    color: "#ffffff",
  },
  addToCartButton: {
    backgroundColor: "#0080ff",
    borderRadius: 8,
    paddingVertical: hp("1%"),
  },
  deliveryInformationSection: {
    borderStyle: "solid",
    marginBottom: hp("1%"),
  },
  deliveryInformationText: {
    fontSize: 18,
    color: "#aaaaaa",
    marginBottom: hp("0.5%"),
  },
  picklocationButton: {
    backgroundColor: "#0080ff",
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("20%"),
    borderRadius: wp("1.5%"),
  },
  picklocationText: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
  pickedLocationContainer: {
    borderStyle: "solid",
    borderColor: "#0080ff",
    borderWidth: wp("0.3%"),
    marginVertical: hp("1%"),
    paddingVertical: hp("0.9%"),
    paddingHorizontal: wp("2%"),
    borderRadius: wp("1.5%"),
  },
  chooseLocationSection: {
    backgroundColor: "#ededed",
    padding: hp("0.5%"),
  },
  chooseLocationText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  productDetailSection: {
    marginVertical: hp("2%"),
  },
  productDetailText: {
    fontSize: 18,

    color: "#aaaaaa",
    marginBottom: hp("0.5%"),
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  customerFeedbaackSection: {
    marginVertical: hp("2%"),
  },
  customerFeedbackText: {
    fontSize: 18,
    color: "#aaaaaa",
    marginBottom: hp("0.5%"),
  },
  productRatingsReviewText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  theReviewContainer: {
    borderStyle: "solid",
    borderTopWidth: wp("0.1%"),
    borderColor: "#ccc",
  },
});
