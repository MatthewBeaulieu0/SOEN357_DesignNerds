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
            <Text style={styles.label}>
                Birth month and year *        Weight(lbs)
            </Text>

            <View style={styles.row}>
                <TextInput
                    style={[
                        styles.input,
                        styles.placeholder,
                        { marginRight: 10 },
                    ]}
                    placeholder="Select date            &#128197;"
                    value={date}
                    onChangeText={handleDateChange}
                    type="date"
                />
                <TextInput
                    style={[styles.input, { width: 100 }]}
                    placeholder="Weight"
                    value={weight}
                    onChangeText={handleWeightChange}
                />
            </View>
            <Text style={styles.vaxTitle}>Vaccination History</Text>
            <View style={styles.rowWithMinus}>
                <Text style={styles.label}>Vaccine administered*</Text>
                <View style={styles.minusCircle}>
                    <Text style={styles.minus}>-</Text>
                </View>
            </View>
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
                    placeholder="Select                                                                    &#128197;"
                    value={PetName}
                    onChangeText={handlePetNameChange}
                />
            </View>

            <View style={styles.line} />
            <View style={styles.row}>
                <View style={styles.ellipse}>
                    <Text style={styles.plus}>+</Text>
                </View>
                <Text style={styles.addVaccine}>Add a vaccine</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8E8E8",
        padding: 20,
        borderRadius: 10,
        width: "85%",
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
    select: {
        backgroundColor: "#FFFFFF",
        fontWeight: "bold",
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#B9B9B9",
        borderStyle: "dashed",
        flex: 1,
        marginLeft: 10,
    },
    ellipse: {
        marginTop: 15,
        marginLeft: 10,
        width: 23,
        height: 23,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#63C6CD",
        alignItems: "center",
        justifyContent: "center",
    },
    plus: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#63C6CD",
        textAlignVertical: "center",
    },
    addVaccine: {
        marginTop: 15,
        marginLeft: 10,
        fontFamily: "gothic-a1-regular",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 15,
        color: "#999999",
    },
    rowWithMinus: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    minusCircle: {
        width: 23,
        height: 23,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#E47D7D",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    minus: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#E47D7D",
        textAlignVertical: "center",
    },
});

export default AddAPetComponent;
