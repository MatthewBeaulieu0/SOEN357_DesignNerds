import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const AddAPetComponent = ({ onPetNameChange }) => {
    const [vaccines, setVaccines] = useState([{ name: "", date: "" }]);
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
    const handleRemoveVaccine = (index) => {
        const updatedVaccines = [...vaccines];
        updatedVaccines.splice(index, 1);
        setVaccines(updatedVaccines);
    };
    const handleAddVaccine = () => {
        setVaccines((prevVaccines) => [
            ...prevVaccines,
            { name: "", date: "" },
        ]);
    };
    const handleAddPet = () => {
        console.log(PetName);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pet Name *</Text>
            <View style={styles.row}>
                <TextInput
                    style={[
                        styles.input,
                        styles.placeholder,
                        { color: "#333" },
                    ]}
                    placeholder="Enter Pet Name"
                    value={PetName}
                    onChangeText={handlePetNameChange}
                />
            </View>
            <Text style={styles.label}>Breed</Text>
            <View style={styles.row}>
                <TextInput
                    style={[
                        styles.input,
                        styles.placeholder,
                        { color: "#333" },
                    ]}
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
                        { color: "#333" },
                        { marginRight: 10 },
                    ]}
                    placeholder="Select date            &#128197;"
                    value={date}
                    onChangeText={handleDateChange}
                    type="date"
                />
                <TextInput
                    style={[
                        styles.input,
                        styles.placeholder,
                        { color: "#333" },
                        { width: 100 },
                    ]}
                    placeholder="Weight"
                    value={weight}
                    onChangeText={handleWeightChange}
                />
            </View>
            <Text style={styles.vaxTitle}>Vaccination History</Text>
            {vaccines.map((vaccine, index) => (
                <View key={index}>
                    <View style={styles.rowWithMinus}>
                        <Text style={styles.label}>Vaccine administered*</Text>
                        <View style={styles.minusCircle}>
                            <Text
                                style={styles.minus}
                                onPress={() => handleRemoveVaccine(index)}
                            >
                                -
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={[
                                styles.input,
                                styles.placeholder,
                                { color: "#333" },
                            ]}
                            placeholder="Enter the vaccine"
                            value={vaccine.name}
                            onChangeText={(name) => {
                                const updatedVaccines = [...vaccines];
                                updatedVaccines[index].name = name;
                                setVaccines(updatedVaccines);
                            }}
                        />
                    </View>
                    <Text style={styles.label}>Vaccination date*</Text>
                    <View style={styles.row}>
                        <TextInput
                            style={[
                                styles.input,
                                styles.placeholder,
                                { color: "#333" },
                            ]}
                            placeholder="Select                                                                    &#128197;"
                            value={vaccine.date}
                            onChangeText={(date) => {
                                const updatedVaccines = [...vaccines];
                                updatedVaccines[index].date = date;
                                setVaccines(updatedVaccines);
                            }}
                        />
                    </View>
                    <View style={styles.line} />
                </View>
            ))}
            <View style={styles.row}>
                <View style={styles.ellipse}>
                    <Text style={styles.plus} onPress={handleAddVaccine}>
                        +
                    </Text>
                </View>
                <Text style={styles.addVaccine}>Add a vaccine</Text>
            </View>
            <TouchableOpacity
                onPress={handleAddPet}
                style={[styles.addBtn, styles.addBtnView]}
            >
                <Ionicons name="add" size={50} color="white" style={{}} />
            </TouchableOpacity>
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
    addBtn: {
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#75f5df0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        alignSelf: "center",
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
    addBtnView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "turquoise",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AddAPetComponent;
