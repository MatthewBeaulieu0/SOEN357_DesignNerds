import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import backIcon from '../../static/images/backIcon.png';
import searchIcon from '../../static/images/searchIcon.png';

import checkmarkIcon from '../../static/images/checkmark.png';
import Ionicons from "@expo/vector-icons/Ionicons";

function PersonalConversationsPage({ navigation }) {
  function navigateToConversations() {

    //navigation using 'backIcon' button works, brings user back to ConversationsPage
    navigation.navigate('ConversationsPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconContainer} onPress={navigateToConversations}>
          <Image source={backIcon} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>M.D. Demola Andreas</Text>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image source={searchIcon} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <View style={[styles.chatContainer, styles.chatLeft]}>
        <Text style={styles.chatText}>Hi Marianne, what could i help you with today?</Text>
        <View style={styles.chatTimeStampContainer}>
        <Text style={styles.chatTimeStamp}>5 min ago</Text>
        </View>
      </View>
      <View style={[styles.chatContainer, styles.chatRight]}>
      <View style={styles.chatContent}>
    <Text style={styles.chatText}>Hi Demola! My cat has been balding where she is licking should I take her to a vet?</Text>
    <View style={styles.checkmarkIconContainer}>
            <Image source={checkmarkIcon} style={styles.checkmarkIcon} />
          </View>
     </View>
     <View style={styles.chatTimeStampContainer}>
    <Text style={styles.chatTimeStamp}>4 min ago</Text>
     </View>
    </View>
        <View style={[styles.chatContainer, styles.chatLeft]}>
        <Text style={styles.chatText}>Could you send me a picture of the spot?</Text>
        <View style={styles.chatTimeStampContainer}>
        <Text style={styles.chatTimeStamp}>2 min ago</Text>
        </View>
      </View>
      <View style={[styles.chatContainer, styles.chatRight, styles.chatImageContainer]}>
        <View style={styles.chatContent}>
        <Image source={require('../../static/images/CatBaldSpot.png')} style={styles.chatImage} />
        <View style={styles.checkmarkIconContainer}>
            <Image source={checkmarkIcon} style={styles.checkmarkIcon} />
          </View>
        </View>
        <View style={styles.chatTimeStampContainer}>
        <Text style={styles.chatTimeStamp}>1 min ago</Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.line} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconContainer}>
        <Ionicons name="add-outline" size={30} color="#000"/>
            </TouchableOpacity>
            <TextInput style={styles.headerInput} placeholder='Start typing...'/>
            <TouchableOpacity style={styles.headerIconContainer} disabled={true}>
              <Ionicons name="send-outline" size={25} color="#000"/>
            </TouchableOpacity>
          </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  headerIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
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
  },
  checkmarkIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 2,
  },
  checkmarkIcon: {
    width: 20,
    height: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomWidth: 0,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'space-between'
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  chatContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 13,
    maxWidth: '70%',
    alignSelf: 'flex-start',
    backgroundColor: '#grey',
    flex: 1,
  },
  chatLeft: {
    backgroundColor: '#7DC7D5',
    borderBottomLeftRadius: 0,
  },
  chatRight: {
    backgroundColor:'#FFFFFF',
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
  chatText: {
    fontSize: 19,
  },
  chatImageContainer: {
    borderWidth: 2,
    borderColor: '#E5E5E5',
    padding: 20,
  },
  chatImage: {
    width: 230,
    height: 200,
    borderRadius: 10,
  },
  // footer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   flexDirection: 'row',
  //   backgroundColor: '#FFFFFF',
  //   padding: 22,
  //   borderTopWidth: 1,
  //   borderTopColor: '#E5E5E5',
  // },
  
  // footerIconContainer: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 0,
  //   backgroundColor: '#E5E5E5',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginHorizontal: 5,
  // },
  
  // footerIcon: {
  //   width: 40,
  //   height: 40,
  // },
  // footerTextInputContainer: {
  //   flex: 1,
  //   backgroundColor: '#E5E5E5',
  //   borderRadius: 20,
  //   marginHorizontal: 5,
  // },
  // footerTextInput: {
  //   flex: 1,
  //   paddingHorizontal: 20,
  //   fontSize: 18,
  // },
  chatTimeStampContainer: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 10,
    position: 'relative', // add this line
  },
  chatTimeStamp: {
    fontSize: 13,
    color: '#666',
  },  
});

export default PersonalConversationsPage;
