import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import Header from "../Components/header";
import AddApetComponent from "../Components/AddAPetComponent";
export default function AddPetForm({ route, navigation }) {
    console.log(route);
    const { firstName } = route.params;
    const [petName, setPetName] = useState("");
    const [breed, setBreed] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [weight, setWeight] = useState("");
    const [vaccineAdministered, setVaccineAdministered] = useState("");
    const [vaccinationDate, setVaccinationDate] = useState("");

    const handleAddPet = () => {
        console.log(
            `Pet Name: ${petName}, Breed: ${breed}, Birth Month: ${birthMonth}, Birth Year: ${birthYear}, Weight: ${weight}, Vaccine Administered: ${vaccineAdministered}, Vaccination Date: ${vaccinationDate}`
        );
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header firstName={firstName} />
            <View style={styles.addAPet}>
                <Text style={[styles.petText]}>Add A Pet</Text>
                <View style={styles.circle}>
                    <Image source={require("../assets/gallery-add.png")} />
                    <Text style={styles.addPetText}>Upload Pet Avatar</Text>
                </View>
            </View>

            <View style={styles.addPetComponent}>
                <AddApetComponent />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    petText: {
        fontFamily: "Montserrat-Regular",
        fontSize: 32,
        fontWeight: "400",
        lineHeight: 39,
        letterSpacing: 0,
        textAlign: "center",
    },
    tile: {
        fontFamily: "Montserrat-Regular",
        fontSize: 30,
    },
    addPetComponent: {
        alignItems: "center",
        justifyContent: "center",
    },
    addAPet: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#0080ff",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    circle: {
        position: "absolute",
        width: 88,
        height: 86,
        borderRadius: 44,
        backgroundColor: "rgba(0, 0, 0, 0.53)",
        alignItems: "center",
        justifyContent: "center",
        right: 20,
        top: 10,
        borderColor: "#63C6CD",
        borderWidth: 2,
        zIndex: 1,
    },
    addPetText: {
        color: "#000000",
        fontSize: 13,
        lineHeight: 17,
        textAlign: "center",
        fontFamily: "gothic-a1-regular",
        fontWeight: "700",
    },
});
