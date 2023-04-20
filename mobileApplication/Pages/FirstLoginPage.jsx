import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../static/images/LoginLogo.png";
import EasyLoginComponent from "../Components/EasyLoginComponent";

function FirstLoginPage({ navigation }) {
  const handleTurquoiseButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={image} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <EasyLoginComponent navigation={navigation} />
      </View>
      <TouchableOpacity
        style={styles.turquoiseButton}
        onPress={handleTurquoiseButtonClick}>
        <Text style={styles.turquoiseButtonText}>Just a few steps away</Text>
      </TouchableOpacity>
      <View style={styles.pageDots}>
        <View style={[styles.dot]}/>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    marginTop:80,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "28%",
    marginTop: -70,
    marginBottom: 10,
  },
  logo: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
    aspectRatio: 1, // set the aspect ratio of your logo
  },
  turquoiseButton: {
    marginTop: 30,
    backgroundColor: "turquoise",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  turquoiseButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 10,
    height: "43%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  pageDots: {
    flexDirection: "row",

    marginTop: 20,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#c4c4c4",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "turquoise",
  },
});
export default FirstLoginPage;
