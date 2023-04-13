import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

const Header = ({ firstName }) => {
    async function loadFonts() {
        await Font.loadAsync({
            "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        });
    }

    // Call the loadFonts function when the component mounts
    React.useEffect(() => {
        loadFonts();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { marginTop: 10 }]}>
                Hello, {firstName}
            </Text>
            <Image
                source={require("../assets/logoHeader.png")}
                style={styles.logo}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        height: 80,
        backgroundColor: "#fff",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: "100%",
        top: 0,
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: "Montserrat-Regular",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});

export default Header;
