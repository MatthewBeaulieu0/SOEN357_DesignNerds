import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../static/images/LoginLogo.png";
import EasyLoginComponent from "../Components/EasyLoginComponent";
import FormLoginComponent from "../Components/FormLoginComponent";
import Header from "../Components/header";

export default function HomePage({ route, navigation }) {
    const { firstName } = route.params;

    const handleAddPetClick = () => {
        console.log(firstName);
        navigation.navigate("AddPetForm", { firstName: firstName });
    };

    return (
        <View>
            <Header firstName={firstName} />
            <Image
                source={require("../assets/homeImage.png")}
                style={styles.logo}
            />
            <View style={styles.textBox}>
                <Text style={styles.text}>
                    You don't have any pets! Add your first pet by pressing the
                    + button
                </Text>
            </View>
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddPetClick}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        marginTop: 80,
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
        backgroundColor: "turquoise",
    },
    textBox: {
        position: "absolute",
        width: 293,
        height: 72,
        left: 60,
        top: 472,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "Montserrat-Regular",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 24,
        textAlign: "center",
    },
    logo: {
        position: "absolute",
        width: 305,
        height: 301,
        left: "50%",
        marginLeft: -152.5,
        top: 173,
        resizeMode: "contain",
    },
});
