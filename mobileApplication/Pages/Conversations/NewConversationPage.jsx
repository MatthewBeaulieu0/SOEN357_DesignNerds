import React, {useState} from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform, Image
} from "react-native";
import {HStack, Stack} from "react-native-flex-layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Avatar, SearchBar} from 'react-native-elements';


function NewConversationPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>New Conversation Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 20
  }
});
export default NewConversationPage;
