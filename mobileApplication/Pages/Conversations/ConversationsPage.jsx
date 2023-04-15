import React, {useState} from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform, Image, SafeAreaView
} from "react-native";
import {HStack, Stack} from "react-native-flex-layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Avatar, SearchBar} from 'react-native-elements';


function ConversationsPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <HStack spacing={'auto'} style={styles.heading}>
        <Text style={styles.title}>Conversations</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewConversationPage')}>
          <Ionicons name="create-outline" size={30}/>
        </TouchableOpacity>
      </HStack>
      <SearchBar platform="android" placeholder={'Search'} containerStyle={{paddingHorizontal:15}}/>
      <ScrollView style={styles.convoListView}>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalConversationsPage')}>
          <View style={styles.convoContainer}>
            <HStack spacing={'auto'}>
              <Avatar
                rounded
                title={'DA'}
                size={50}
                minWidth={50}
                overlayContainerStyle={{backgroundColor: '#c5c5c5'}}
              />
              <View style={styles.convoText}>
                <HStack spacing={'auto'}>
                  <Text style={styles.subtitle}>M.D. Demola Andreas</Text>
                  <Text>
                    {new Date(Date.now() - 2 * 60 * 1000).toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true
                    })}
                  </Text>
                </HStack>
                <HStack spacing={'auto'}>
                  <Text>photo.png</Text>
                </HStack>
              </View>
            </HStack>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.convoContainer}>
            <HStack spacing={'auto'}>
              <Avatar
                rounded
                title={'AZ'}
                size={50}
                minWidth={50}
                overlayContainerStyle={{backgroundColor: '#c5c5c5'}}
              />
              <View style={styles.convoText}>
                <HStack spacing={'auto'}>
                  <Text style={styles.subtitle}>M.D. Ali Zaman</Text>
                  <Text>9:04 AM</Text>
                </HStack>
                <HStack spacing={'auto'}>
                  <Text overflow={"hidden"}><Text
                    style={{textDecorationLine: 'underline'}}>http://cat-kibble.com</Text> Hope this helps!</Text>
                  <View style={styles.dot}>
                    <Text style={styles.dotText}>1</Text>
                  </View>
                </HStack>
              </View>
            </HStack>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.convoContainer}>
            <HStack spacing={'auto'}>
              <Avatar
                rounded
                size={50}
                minWidth={50}
                source={require('../../static/images/vet-avatar-female.png')}
              />
              <View style={styles.convoText}>
                <HStack spacing={'auto'}>
                  <Text style={styles.subtitle}>M.D. Amelie Tremblay</Text>
                  <Text>Yesterday</Text>
                </HStack>
                <HStack spacing={'auto'}>
                  <Text>Merci &#57378;</Text>
                </HStack>
              </View>
            </HStack>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  heading: {
    paddingHorizontal: 20
  },
  convoListView: {
    backgroundColor: "#f2f2f2",
  },
  convoContainer: {
    marginTop:5,
    backgroundColor: "white",
    padding: 20
  },
  convoText: {
    justifyContent: "center",
    width: "80%",
    alignSelf: 'left',
    minHeight: 50
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold"
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 30,
    marginHorizontal: 5,
    backgroundColor: 'turquoise'
  },
  dotText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 'auto',
    top: '10%'
  }
});
export default ConversationsPage;
