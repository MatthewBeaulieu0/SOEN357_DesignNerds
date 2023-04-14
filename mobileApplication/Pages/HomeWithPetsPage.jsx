import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../static/images/PetImage1.png';

// missing header and footer!!!!!!

function PetCard({ name, age, breed, imageSource, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.ageText}>{age} years old</Text>
        <Text style={styles.breedText}>{breed}</Text>
      </View>
    </TouchableOpacity>
  );
};

function HomeWithPetsPage({ navigation }) {
  const handlePetComponentClick = () => {

    //pet description page name here
    navigation.navigate('PetsDescription');
  };

  return (
    <View style={styles.pageContainer}>
        <Text style={styles.title}>My Pets</Text>
    <PetCard
      name="Piki"
      age="4"
      breed="Mixed"
      imageSource={require('../static/images/PetImage1.png')}
      onPress={handlePetComponentClick}
    />
    <PetCard
      name="Peanut"
      age="2"
      breed="Toy Poodle"
      imageSource={require('../static/images/PetImage2.png')}
      onPress={handlePetComponentClick}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#ccc',
      padding: 30,
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 60, // add margin bottom to create space between components
      marginLeft: 15,
      marginRight: 15,
    },
    pageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: 85, // increase the width of the image
      height: 85, // increase the height of the image
      marginRight: 10,
      borderRadius: 35, // adjust border radius to match the new size
    },
    textContainer: {
      flex: 1,
    },
    nameText: {
      fontSize: 25, // increase font size
      fontWeight: 'bold',
    },
    ageText: {
      fontSize: 20, // increase font size
      marginBottom: 5, // add margin bottom to create space between texts
    },
    breedText: {
      fontSize: 20, // increase font size
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
      },
  });
  

export default HomeWithPetsPage;
