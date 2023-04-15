import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Header from "../Components/header";
import AddApetComponent from "../Components/AddAPetComponent";
export default function AddPetForm({ route, navigation }) {
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
        <View>
            <Header firstName={firstName} />
            <View style={styles.addAPet}>
                <Text
                    style={[
                        styles.title,
                        {
                            fontFamily: "Montserrat-Regular",
                            fontSize: 32,
                            fontWeight: "400",
                            lineHeight: 39,
                            letterSpacing: 0,
                            textAlign: "center",
                        },
                    ]}
                >
                    Add A Pet
                </Text>
            </View>
            <AddApetComponent></AddApetComponent>
        </View>
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
    tile: {
        fontFamily: "Montserrat-Regular",
        fontSize: 30,
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
});
