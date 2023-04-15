import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

const Header = ({ firstName }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Hello, {firstName}</Text>
            <Image
                source={require("../assets/logoHeader.png")}
                style={styles.headerLogo}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
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
    headerText: {
        fontSize: 24,
        lineHeight: 24,
        fontFamily: "Montserrat-Regular",
        marginTop: 25,
        marginLeft: 15,
    },
    headerLogo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});

export default Header;
