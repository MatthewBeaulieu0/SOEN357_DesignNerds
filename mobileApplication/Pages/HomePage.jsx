import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../static/images/LoginLogo.png";
import EasyLoginComponent from "../Components/EasyLoginComponent";
import FormLoginComponent from "../Components/FormLoginComponent";
import Header from "../Components/header";
async function loadFonts() {
    await Font.loadAsync({
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    });
}
export default function HomePage({ route }) {
    async function loadFonts() {
        await Font.loadAsync({
            "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        });
    }
    const { firstName } = route.params;
    const handleTurquoiseButtonClick = () => {
        console.log("second login page button clicked");
    };
    loadFonts();
    return (
        <View>
            <Header firstName={firstName} />
            <Text>Welcome, {firstName}!</Text>
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
});
