import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {app, auth} from './firebaseConfig';
import React,{useEffect} from 'react';

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
