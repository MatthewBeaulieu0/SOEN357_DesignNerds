import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const AddAPetComponent = ({ onPetNameChange }) => {
    const [PetName, setPetName] = useState("");
    const [breed, setBreed] = useState("");
    const [weight, setWeight] = useState("");
    const [date, setDate] = useState("");

    const handlePetNameChange = (text) => {
        setPetName(text);
        // onPetNameChange(text);
    };

    const handleBreedChange = (text) => {
        setBreed(text);
    };

    const handleWeightChange = (text) => {
        setWeight(text);
    };

    const handleDateChange = (text) => {
        setDate(text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pet Name *</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.placeholder]}
                    placeholder="Enter Pet Name"
                    value={PetName}
                    onChangeText={handlePetNameChange}
                />
            </View>
            <Text style={styles.label}>Breed</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.placeholder]}
                    placeholder="Enter Breed"
                    value={breed}
                    onChangeText={handleBreedChange}
                />
            </View>
            <Text style={styles.label}>Birth month and year * Weight(lbs)</Text>

            <View style={styles.row}>
                <TextInput
                    style={[
                        styles.input,
                        styles.placeholder,
                        { marginRight: 10 },
                    ]}
                    placeholder="Select date          &#128197;"
                    value={date}
                    onChangeText={handleDateChange}
                    type="date"
                />
                <TextInput
                    style={[styles.input, styles.placeholder, { width: 100 }]}
                    placeholder="Weight"
                    value={weight}
                    onChangeText={handleWeightChange}
                />
            </View>
            <Text style={styles.vaxTitle}>Vaccination History</Text>
            <Text style={styles.label}>Vaccine administered*</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.placeholder]}
                    placeholder="Enter the vaccine"
                    value={PetName}
                    onChangeText={handlePetNameChange}
                />
            </View>
            <Text style={styles.label}>Vaccination date*</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.placeholder]}
                    placeholder="Select                                                              &#128197;"
                    value={PetName}
                    onChangeText={handlePetNameChange}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8E8E8",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    vaxTitle: {
        fontWeight: "gothic-a1-regular",
        marginRight: 10,
        fontWeight: "500",
        fontSize: 17,
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    label: {
        fontWeight: "gothic-a1-regular",
        marginRight: 10,
        fontWeight: "500",
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#63C6CD",
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    placeholder: {
        color: "#A9A9A9",
    },
    select: {
        backgroundColor: "#FFFFFF",
        fontWeight: "bold",
    },
});

export default AddAPetComponent;
