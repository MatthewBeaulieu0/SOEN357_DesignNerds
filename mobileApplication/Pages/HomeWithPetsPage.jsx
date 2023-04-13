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
    navigation.navigate('PetsDescription');
  };

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ageText: {
    fontSize: 16,
  },
  breedText: {
    fontSize: 16,
  },
});

export default HomeWithPetsPage;
