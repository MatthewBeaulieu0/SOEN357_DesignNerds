import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {app, auth} from './firebaseConfig';
import React,{useEffect} from 'react';
import GreetingPage from './Pages/GreetingPage';

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
    <GreetingPage></GreetingPage>
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
