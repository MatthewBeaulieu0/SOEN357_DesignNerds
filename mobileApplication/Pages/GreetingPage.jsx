import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../static/images/GreetingLogo.png';

function GreetingPage({ navigation }) {
  const handleButtonClick = () => {
    // handle button click
    console.log('Button clicked!');

    // use react navigation router to go to the first login page
    navigation.navigate('FirstLoginPage')

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to VetSmart</Text>
      <Text style={styles.subtitle}>Your Pet Care Hub, all absolutely free</Text>
      <Image source={image} style={styles.img} />
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Continue to Sign In</Text>
      </TouchableOpacity>
      <View style={styles.pageDots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
  img: {
    width: '80%',
    height:'50%',
    marginBottom: 32,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: 'turquoise',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pageDots: {
    flexDirection: 'row',
    marginBottom: 32,
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#c4c4c4',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'turquoise',
  },
});

export default GreetingPage;