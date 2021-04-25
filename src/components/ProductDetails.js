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
import { MaterialIcons } from "@expo/vector-icons";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }
  ratingsCompleted(ratings) {
    console.log("Ratings is" + ratings);
  }

  render() {
    return (
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.ProductImageSection}>
            <Image
              style={style.productImage}
              source={require("../../assets/ladies_bag.jpg")}
            />
          </View>
          <View style={style.basicDetailSection}>
            <View style={style.product}>
              <Text style={style.productNameText}>Gucci Bag</Text>
              <Text style={style.priceText}>GH¢ 1800</Text>
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
                Intel® Core™ i7-6700HQ (2.6 GHz, up to 3.5 GHz), 4 GB DDR4-2133
                SDRAM (1 x 4 GB), 1 TB 5400 rpm SATA, 15.6" diagonal FHD IPS
                UWVA anti-glare WLED-backlit (1920 x 1080)
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
              this.props.navigation.navigate("Cart");
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
    width: 330,
    height: 300,
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
    marginLeft: wp("1.5%"),
  },
  totalRatingValueText: {
    fontSize: 13,
    color: "#080809",
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
    backgroundColor: "#080809",
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
  product: {
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: "#EEEEEE",
    borderWidth: 2,
  },
});
