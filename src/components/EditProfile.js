import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: [21, 21],
      allowsEditing: true,
      quality: 1,
    });
    if (!cancelled) this.setState({ image: uri });
    console.log(uri);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}> username</Text>
          <TextInput style={styles.sectionInput}></TextInput>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Email Address</Text>
          <TextInput style={styles.sectionInput}></TextInput>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Contact</Text>
          <TextInput style={styles.sectionInput}></TextInput>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.profilePictureHeading}>
            <Text style={styles.sectionText}>Profile Picture</Text>
            <TouchableOpacity
              onPress={() => {
                this.selectPicture();
              }}
            >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity
              onPress={() => {
                this.selectPicture();
              }}
            >
              <Image
                style={styles.profileImage}
                source={{ uri: this.state.image }}
              />
            </TouchableOpacity>
          </View>
          <TextInput></TextInput>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>save changes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: wp("3%"),
    alignItems: "center",
    marginVertical: hp("5%"),
  },
  sectionContainer: {
    borderStyle: "solid",
    borderTopWidth: wp("0.3%"),
    width: wp("85%"),
    marginTop: hp("4%"),
    marginBottom: hp("2%"),
  },
  sectionText: {
    fontSize: 20,
    fontWeight: "700",
  },
  sectionInput: {
    borderStyle: "solid",
    borderWidth: wp("0.2%"),
    borderColor: "#aaaaaa",
    borderRadius: wp("1%"),
  },

  profileImage: {
    width: wp("70%"),
    height: hp("35%"),
    borderRadius: wp("35%"),
  },
  profileImageContainer: {
    flexDirection: "column",
    alignItems: "center",

    marginTop: wp("3%"),
  },
  profilePictureHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editText: {
    fontSize: 20,
    color: "#0080ff",
  },
  saveButton: {
    backgroundColor: "#0080ff",
    paddingHorizontal: hp("14.5%"),
    paddingVertical: wp("2%"),
    borderRadius: wp("2%"),
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});
