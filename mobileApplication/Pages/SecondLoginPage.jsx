import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../static/images/LoginLogo.png";
import FormLoginComponent from "../Components/FormLoginComponent";
import { db } from "../firebaseConfig";
import { collection, doc, setDoc,getDoc } from "firebase/firestore"

export default function SecondLoginPage({route, navigation }) {
  const { userID } = route.params;

    const [firstName, setFirstName] = useState("");

    const [user, setUser] = useState({})
    const handleTurquoiseButtonClick = () => {
        console.log("second login page button clicked");
        console.log(firstName);
        navigation.navigate("HomePage", { firstName: user.name});

        // handle turquoise button click logic here
    };
    const handleFirstNameChange = (text) => {
        setFirstName(text);
    };

    const fetchUser = async (userID) => {
      try {
        console.log(db)
        const docRef = await doc(db, "users", userID);
        console.log(docRef)
        var snapShot = await getDoc(docRef);
        console.log(snapShot)
        
      } catch (error) {
        console.log("error in fetchUser");
        console.log(error);
        throw error;
      }
      setUser(snapShot.data());
    };

    useEffect(() => {
      fetchUser(userID);
    },[userID]);

    //fetchUser(userID)


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={image} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                <FormLoginComponent onFirstNameChange={handleFirstNameChange} userID={userID} ageP={user.age} countryP={user.country} firstNameP={user.name} lastNameP={user.lastName} />
            </View>
            <TouchableOpacity
                style={styles.turquoiseButton}
                onPress={handleTurquoiseButtonClick}
            >
                <Text style={styles.turquoiseButtonText}>Get Started</Text>
            </TouchableOpacity>
            <View style={styles.pageDots}>
                <View style={[styles.dot]} />
                <View style={[styles.dot]} />
                <View style={[styles.dot, styles.activeDot]} />
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
    marginTop: 80
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
    shadowOffset: {width: 0, height: 2},
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
    height: "38%",
    width: "100%",
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
    backgroundColor: "turquoise"
  }
});
