import { StyleSheet } from "react-native";
import { app, auth } from "./firebaseConfig";
import React, { useEffect } from "react";
import GreetingPage from "./Pages/GreetingPage";
import FirstLoginPage from "./Pages/FirstLoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondLoginPage from "./Pages/SecondLoginPage";
import Forum from "./Pages/Forums/Forum";
import ForumTopics from "./Pages/Forums/ForumTopics";
import ConversationsPage from "./Pages/Conversations/ConversationsPage";
import PersonalConversationsPage from "./Pages/Conversations/PersonalConversationsPage";
import NewConversationPage from "./Pages/Conversations/NewConversationPage";
import HomePage from "./Pages/HomePage";
import AddPetForm from "./Pages/AddPetForm";
import PetProfile from "./Pages/PetProfile";
import * as Font from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
    async function loadFonts() {
        await Font.loadAsync({
            "Montserrat-Regular": require("../mobileApplication/assets/fonts/Montserrat-Regular.ttf"),
            "gothic-a1-regular": require("../mobileApplication/assets/fonts/GothicA1-Regular.ttf"),
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
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="AddPetForm" component={AddPetForm} />
                <Stack.Screen name="PetProfile" component={PetProfile} />
                <Stack.Screen
                    name="FirstLoginPage"
                    component={FirstLoginPage}
                />
                <Stack.Screen
                    name="SecondLoginPage"
                    component={SecondLoginPage}
                />
                <Stack.Screen name="ForumTopics" component={ForumTopics} />
                <Stack.Screen name="Forum" component={Forum} />
                <Stack.Screen
                    name="ConversationsPage"
                    component={ConversationsPage}
                />
                <Stack.Screen
                    name="PersonalConversationsPage"
                    component={PersonalConversationsPage}
                />
                <Stack.Screen
                    name="NewConversationPage"
                    component={NewConversationPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
