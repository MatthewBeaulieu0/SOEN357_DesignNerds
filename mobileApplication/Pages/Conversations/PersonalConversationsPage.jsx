import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

function PersonalConversationsPage({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ConversationsPage')}><Text>Personal Convos Page</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersonalConversationsPage;