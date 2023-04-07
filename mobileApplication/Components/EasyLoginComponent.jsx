import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../static/images/GreetingLogo.png';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Stack, HStack, VStack } from 'react-native-flex-layout';


function EasyLoginComponent(){

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
            <HStack spacing={10}>
            <Ionicons name="logo-google" size={30}></Ionicons>
            <Text style={styles.text}>Sign in with Google</Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMicrosoftSignIn}>
            <HStack spacing={10}>
            <Ionicons name="logo-windows" size={30}></Ionicons>
            <Text style={styles.text}>Sign in with Microsoft</Text>
            </HStack>
          </TouchableOpacity>   
          <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleFacebookSignIn}>
            <HStack spacing={10}>
            <Ionicons name="logo-facebook" size={30}></Ionicons>
            <Text style={styles.text}>Sign in with Facebook</Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleAppleSignIn}>
            <HStack spacing={10}>
            <Ionicons name="logo-apple" size={30} color="white"></Ionicons>
            <Text style={styles.text_apple}>Sign in with Apple</Text>
            </HStack>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#D0D0D0', // set the background color to light gray
          borderRadius: 10, // add rounded corners to the container
          
        },
        button: {
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
          width: '80%',
          marginTop:5,

          marginBottom: 10,
        },
        blueButton: {
          backgroundColor: '#3b5998',
        },
        blackButton: {
          backgroundColor: '#000',
        },
        text: {
          color: '#000',
          fontWeight: 'bold',
        },
        text_apple: {
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
      });
    
export default EasyLoginComponent;