import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormLoginComponent = ({ onFirstNameChange, userID, ageP, countryP, firstNameP, lastNameP}) => {
    const [firstName, setFirstName] = useState(firstNameP);
    const [lastName, setLastName] = useState(lastNameP);
    const [age, setAge] = useState(ageP);
    const [country, setCountry] = useState(countryP);

    const handleFirstNameChange = (text) => {
        setFirstName(text);
        onFirstNameChange(text);
    };

    const handleLastNameChange = (text) => {
        setLastName(text);
    };

    const handleAgeChange = (text) => {
        setAge(text);
    };

    const handleCountryChange = (text) => {
        setCountry(text);
    };

    useEffect(()=>{
        console.log("in second page")
        console.log(ageP)
    })
    

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={handleFirstNameChange}
                    defaultValue={firstNameP}
                />
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={handleLastNameChange}
                    defaultValue={lastNameP}
                    
                />
            </View>
            <View style={styles.row}>
                <View style={styles.ageContainer}>
                    <TextInput
                        style={[styles.input, styles.ageInput]}
                        placeholder="Age"
                        value={age}
                        onChangeText={handleAgeChange}
                        defaultValue={ageP+""}
                        
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Country"
                    value={country}
                    onChangeText={handleCountryChange}
                    defaultValue={""+countryP}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    fontSize:16,
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(86,86,86,0.64)',
    backgroundColor:'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  ageContainer: {
    marginRight: 10,
  },
  ageInput: {
    width: 60,
  },
});

export default FormLoginComponent;
