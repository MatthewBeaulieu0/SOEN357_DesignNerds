import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../static/images/GreetingLogo.png';


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
            <Text style={styles.text}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMicrosoftSignIn}>
            <Text style={styles.text}>Sign in with Microsoft</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleFacebookSignIn}>
            <Text style={styles.text}>Sign in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleAppleSignIn}>
            <Text style={styles.text}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f2f2f2', // set the background color to light gray
          borderRadius: 10, // add rounded corners to the container
        },
        button: {
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
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
      });
    
export default EasyLoginComponent;