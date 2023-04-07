import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FormLoginComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
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

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.ageContainer}>
          <TextInput
            style={[styles.input, styles.ageInput]}
            placeholder="Age"
            value={age}
            onChangeText={handleAgeChange}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={handleCountryChange}
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
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 5,
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