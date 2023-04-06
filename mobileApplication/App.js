import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {app, auth} from './firebaseConfig';
import React,{useEffect} from 'react';
import GreetingPage from './Pages/GreetingPage';
import FirstLoginPage from './Pages/FirstLoginPage'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  useEffect(() => {
    console.log(app);
    console.log(auth)

    // Log connection status
    const unsubscribe = auth().onAuthStateChanged(user => {
      console.log("hello "+user)
      if (user) {
        console.log('Firebase connection established.');
      } else {
        console.log('Firebase connection lost.');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (

<NavigationContainer>
<Stack.Navigator
screenOptions={{
  headerShown: false
}}>
  <Stack.Screen name="Home" component={GreetingPage} />
  <Stack.Screen name="FirstLoginPage" component={FirstLoginPage} />
</Stack.Navigator>
</NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
