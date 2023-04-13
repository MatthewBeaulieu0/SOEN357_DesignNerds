import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import sendIcon from '../static/images/sendIcon.png';
import plusIcon from '../static/images/plusIcon.png';
import backIcon from '../static/images/backIcon.png';
import searchIcon from '../static/images/searchIcon.png';
import optionsIcon from '../static/images/optionsIcon.png';

function PersonalConversationPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image source={backIcon} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dr. Demola Andreas</Text>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image source={searchIcon} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image source={optionsIcon} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <View style={[styles.chatContainer, styles.chatLeft]}>
        <Text style={styles.chatText}>Hi Marianne, what could i help you with today?</Text>
      </View>
      <View style={[styles.chatContainer, styles.chatRight]}>
        <Text style={styles.chatText}>Hi Demola! My cat has been balding where she is licking should I take her to a vet?</Text>
      </View>
      <View style={[styles.chatContainer, styles.chatLeft]}>
        <Text style={styles.chatText}>Could you send me a picture of the spot?</Text>
      </View>
      <View style={[styles.chatContainer, styles.chatRight, styles.chatImageContainer]}>
        <Image source={{ uri: '../static/images/CatBaldSpot.png' }} style={styles.chatImage} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image source={plusIcon} style={styles.footerIcon} />
        </TouchableOpacity>
        <View style={styles.footerTextInputContainer}>
          <TextInput placeholder="..." style={styles.footerTextInput} />
        </View>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image source={sendIcon} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'space-between'
  },
  headerIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  headerIcon: {
    width: 20,
    height: 20,
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
    padding: 10,
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
  chatLeft: {
    backgroundColor: '#B1E1FF',
    borderBottomLeftRadius: 0,
  },
  chatRight: {
    backgroundColor:'#FFFFFF',
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
  chatText: {
    fontSize: 16,
  },
  chatImageContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 0,
  },
  chatImage: {
    width: 200,
    height: 200,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  footerIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  footerIcon: {
    width: 20,
    height: 20,
  },
  footerTextInputContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  footerTextInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default PersonalConversationPage;
