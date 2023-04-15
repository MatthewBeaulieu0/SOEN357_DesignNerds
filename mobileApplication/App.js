import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { app, auth } from "./firebaseConfig";
import React, { useEffect } from "react";
import GreetingPage from "./Pages/GreetingPage";
import FirstLoginPage from "./Pages/FirstLoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondLoginPage from "./Pages/SecondLoginPage";
import HomePage from "./Pages/HomePage";
import * as Font from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
    async function loadFonts() {
        await Font.loadAsync({
            "Montserrat-Regular": require("../mobileApplication/assets/fonts/Montserrat-Regular.ttf"),
        });
        console.log("Loaded");
    }
    useEffect(() => {
        console.log(app);
        console.log(auth);
        loadFonts();
        // Log connection status
        const unsubscribe = auth().onAuthStateChanged((user) => {
            console.log("hello " + user);
            if (user) {
                console.log("Firebase connection established.");
            } else {
                console.log("Firebase connection lost.");
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={GreetingPage} />
                <Stack.Screen
                    name="FirstLoginPage"
                    component={FirstLoginPage}
                />
                <Stack.Screen
                    name="SecondLoginPage"
                    component={SecondLoginPage}
                />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
