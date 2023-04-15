import React, {useState} from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform, Image, SafeAreaView, Dimensions
} from "react-native";
import {HStack, Stack, VStack} from "react-native-flex-layout";
import Ionicons from "@expo/vector-icons/Ionicons";

function NewConversationPage({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <KeyboardAvoidingView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerIconContainer} onPress={() => {
              navigation.navigate('ConversationsPage');
            }}>
              <Ionicons name="chevron-back-outline" size={25}/>
            </TouchableOpacity>
              <TextInput style={styles.headerInput} placeholder='Add someone...'/>
            <TouchableOpacity style={styles.headerIconContainer} disabled={true}>
              <Ionicons name="search-outline" size={20}/>
            </TouchableOpacity>
          </View>
{/*          <View style={styles.header}>
            <TouchableOpacity style={styles.headerIconContainer} onPress={() => {
              navigation.navigate('ConversationsPage');
            }}>
              <Ionicons name="add-outline" size={30}/>
            </TouchableOpacity>
            <TextInput style={styles.headerInput} placeholder='Start typing...'/>
            <TouchableOpacity style={styles.headerIconContainer} disabled={true}>
              <Ionicons name="send-outline" size={25}/>
            </TouchableOpacity>
          </View>*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    flexDirection:"column",
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'space-between',
  },
  headerIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  headerInput: {
    fontSize: 16,
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fcfcfc',
    borderColor: '#9d9d9d',
  }
});

export default NewConversationPage;
