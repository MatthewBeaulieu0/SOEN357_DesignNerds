import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import image from '../static/images/GreetingLogo.png';
import Ionicons from '@expo/vector-icons/Ionicons'
import {Stack, HStack, VStack} from 'react-native-flex-layout';


function EasyLoginComponent() {

  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
    // handle Google Sign In logic here
  };

  const handleMicrosoftSignIn = () => {
    console.log('Microsoft Sign In clicked');
    // handle Microsoft Sign In logic here
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign In clicked');
    // handle Facebook Sign In logic here
  };

  const handleAppleSignIn = () => {
    console.log('Apple Sign In clicked');
    // handle Apple Sign In logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <HStack spacing={10} style={styles.iconContent}>
          <Image style={styles.img} source={require('../static/images/Google.png')}/>
          <Text style={[styles.text, styles.textGoogle]}>Sign in with Google</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.greyButton]}  onPress={handleMicrosoftSignIn}>
        <HStack spacing={10} style={styles.iconContent}>
          <Image style={styles.img} source={require('../static/images/Microsoft.png')}/>
          <Text style={styles.text}>Sign in with Microsoft</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleFacebookSignIn}>
        <HStack spacing={10} style={styles.iconContent}>
          <Image style={styles.img} source={require('../static/images/Facebook.png')}/>
          <Text style={styles.text}>Sign in with Facebook</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleAppleSignIn}>
        <HStack spacing={10} style={styles.iconContent}>
          <Ionicons name="logo-apple" size={30} color="white"/>
          <Text style={styles.text}>Sign in with Apple</Text>
        </HStack>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#d9d9d9', // set the background color to light gray
    borderRadius: 10, // add rounded corners to the container
    paddingBottom:15
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginTop: 10,
  },
  img:{
    width:30,
    height:30
  },
  iconContent: {
    alignItems: "center"
  },
  greyButton:{
    backgroundColor:'#2f2f2f'
  },
  blueButton: {
    backgroundColor: '#3b5998',
  },
  blackButton: {
    backgroundColor: '#000',
  },
  text: {
    color:'white',
    fontSize:16,
    fontWeight: 'bold',
  },
  textGoogle : {
    color:'#757575',
  },
});

export default EasyLoginComponent;