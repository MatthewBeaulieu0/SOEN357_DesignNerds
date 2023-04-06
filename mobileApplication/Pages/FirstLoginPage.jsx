import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../static/images/LoginLogo.png';
import EasyLoginComponent from '../Components/EasyLoginComponent';





function FirstLoginPage(){
    const handleTurquoiseButtonClick = () => {
        console.log('button clicked');
        // handle turquoise button click logic here
      }; 
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={image}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>






          <EasyLoginComponent />
          <TouchableOpacity style={styles.turquoiseButton} onPress={handleTurquoiseButtonClick}>
            <Text style={styles.turquoiseButtonText}>Just a few steps away</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    logo: {
      width: '100%',
      height: undefined,
      aspectRatio: 2, // set the aspect ratio of your logo
    },
    turquoiseButton: {
      backgroundColor: '#00ced1',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 50,
    },
    turquoiseButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
export default FirstLoginPage;