import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SuccessScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/payment_successful.jpg")}
          style={styles.image}
        />
        <Text style={styles.payment}>Payment Successful</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.proceed}>Track Order Status</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate("CustomerDashboard");
            }}
          >
            <Text style={styles.proceed}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  payment: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 30,
  },

  image: {
    marginTop: 20,
    height: 300,
    width: 300,
    borderRadius: 150,
  },
  buttonContainer: {
    backgroundColor: "#080809",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 40,
    width: 300,
    marginVertical: 40,
  },

  proceed: {
    color: "#ffffff",
    fontSize: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
