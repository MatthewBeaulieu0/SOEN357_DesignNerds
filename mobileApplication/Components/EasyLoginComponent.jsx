import React,{useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Modal, Pressable,TextInput} from 'react-native';
import image from '../static/images/GreetingLogo.png';
import Ionicons from '@expo/vector-icons/Ionicons'
import {Stack, HStack, VStack} from 'react-native-flex-layout';
import Login from '../BackendLogic/Authentication';


function EasyLoginComponent({ navigation }) {

  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
    // handle Google Sign In logic here
  };

  const handleMicrosoftSignIn = () => {
    console.log('Microsoft Sign In clicked');
    // handle Microsoft Sign In logic here
  };

  const handleFacebookSignIn = async() => {
    console.log('Facebook Sign In clicked');
    let user  = await Login(false)
    if(user){
      console.log(user)
      navigation.navigate('SecondLoginPage',{userID: user})
    }
  };

  const handleAppleSignIn = async () => {
    console.log('Apple Sign In clicked');
    // handle Apple Sign In logic here
    let user  = await Login(true)
    if(user){
      console.log(user)
      navigation.navigate('SecondLoginPage',{userID: user})
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleAppleSignIn}>
        <HStack spacing={10} style={styles.iconContent}>
          <Ionicons name="person-circle" size={30} color="white"/>
          <Text style={styles.text}>Sign in as user</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleFacebookSignIn}>
        <HStack spacing={10} style={styles.iconContent}>
        <Ionicons name="medkit" size={30} color="white"/>
          <Text style={styles.text}>Sign in as veterinary</Text>
        </HStack>
      </TouchableOpacity>
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  
  
  inputModal: {
    fontSize:16,
    flex: 1,
    height: 40,
    
    borderWidth: 2,
    borderColor: 'rgba(86,86,86,0.64)',
    backgroundColor:'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default EasyLoginComponent;