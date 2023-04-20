import React, {useState} from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import {HStack, Stack} from "react-native-flex-layout";
import {Avatar} from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons'

function Forum({navigation}) {
  const [openCommentInput, setOpenCommentInput] = useState(false);

  function handlePostComment() {
    //TODO: complete comment posting later
    setOpenCommentInput(false);
  }

  const handleOpenCommentInput = () => {
    setOpenCommentInput(true);
  }

  const handleCreatePost = () => {
    //  TODO: add post logic later
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backArrow} onPress={() => {
        navigation.navigate("HomePage", { firstName: "Marianne" });
      }}>
        <HStack style={{alignItems: "center"}}>
          <Ionicons name="chevron-back-outline" size={25}/>
          <Text style={{fontSize: 18}}>Back</Text>
        </HStack>
      </TouchableOpacity>
      <Text style={styles.title}>Covid-19</Text>
      <ScrollView>
        <View style={styles.discussionContainer}>
          <View style={styles.postContainer}>
            <HStack spacing={10} style={styles.usernameHeader}>
              <Avatar
                rounded
                title={'RM'}
                size={25}
                minWidth={27}
                minHeight={27}
                overlayContainerStyle={{backgroundColor: '#c5c5c5'}}
              />
              <Text style={styles.subtitle}>Roland Maxwell</Text>
            </HStack>
            <Text style={styles.post}>I'm concerned about my pets getting COVID-19. Can dogs and cats get infected with
              the virus?</Text>
            <Text style={styles.postDatetime}>3 hrs ago</Text>
          </View>
          <HStack spacing={10}>
            <TouchableOpacity onPress={handleOpenCommentInput}>
              <Ionicons name="arrow-redo-outline" size={25}/>
            </TouchableOpacity>
            <View style={styles.replyContainer}>
              <Stack direction="row" spacing={10} style={styles.usernameHeader}>
                <Avatar
                  rounded
                  size={25}
                  minWidth={27}
                  minHeight={27}
                  source={require('../../static/images/vet-avatar-female.png')}
                />
                <Text style={styles.subtitle}><Text style={styles.vetLabel}>M.D.</Text> Amelie Tremblay</Text>
              </Stack>
              <Text>{`Hi there! \nYes, dogs and cats can be infected with COVID-19, although it's relatively uncommon. Most cases have been in pets that have had close contact with a person who has COVID-19.`}</Text>
            </View>
          </HStack>
        </View>

        <View style={styles.discussionContainer}>
          <View style={styles.postContainer}>
            <Stack direction="row" spacing={15} style={styles.usernameHeader}>
              <Avatar
                rounded
                title={'JM'}
                size={25}
                minWidth={27}
                minHeight={27}
                overlayContainerStyle={{backgroundColor: '#c5c5c5'}}
              />
              <Text style={styles.subtitle}>Jen Marlow</Text>
            </Stack>
            <Text style={styles.post}>How can I protect my pets from COVID-19?</Text>
            <Text style={styles.postDatetime}>25 days ago</Text>
          </View>

          <Stack direction={'row'} spacing={10}>
            <TouchableOpacity onPress={handleOpenCommentInput}>
                <Ionicons name="arrow-redo-outline" size={25}/>
            </TouchableOpacity>
            <View style={styles.replyContainer}>
              <Stack direction="row" spacing={10} style={styles.usernameHeader}>
                <Avatar
                  rounded
                  title={'AZ'}
                  size={25}
                  minWidth={27}
                  minHeight={27}
                  overlayContainerStyle={{backgroundColor: '#c5c5c5'}}
                />
                <Text style={styles.subtitle}><Text style={styles.vetLabel}>M.D.</Text> Ali Zaman</Text>
              </Stack>
              <Text>
                Hi Jen,
                the best way to protect your pets is to keep them away from anyone who has COVID-19.
                If you have the virus, you should avoid close contact with your pets and have someone else care for them
                until you are no longer infectious. You should also practice good hygiene around your pets, like washing
                your hands before and after interacting with them.</Text>
            </View>
          </Stack>
          <View style={styles.replyContainerExternal}>
            <Stack direction="row" spacing={10} style={styles.usernameHeader}>
              <Avatar
                rounded
                title={'AZ'}
                size={25}
                minWidth={27}
                minHeight={27}
                source={require('../../static/images/Cricket.jpg')}
              />
              <Text style={styles.subtitle}>Jiminy Rickets</Text>
            </Stack>
            <Text><Text style={styles.vetLabel}>@Jen Marlow</Text> dw I just grounded my lizard for going to a Covid
              super-spreader event</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.commentTextField}>
        <Stack direction="row" spacing={15}>
          <TextInput style={styles.input} placeholder={openCommentInput ? "Write a comment..." : "Write something..."}/>
          <TouchableOpacity style={styles.sendBtn} onPress={openCommentInput ? handlePostComment : handleCreatePost}>
            <Ionicons name="send-outline" size={30}/>
          </TouchableOpacity>
        </Stack>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    marginTop: 80,
    marginBottom: 20
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "28%",
    marginTop: -70,
    marginBottom: 10,
  },
  logo: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
    aspectRatio: 1, // set the aspect ratio of your logo
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
  backArrow: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold"
  },
  vetLabel: {
    color: '#a445f8'
  },
  buttonContainer: {
    marginTop: 10,
    height: "43%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtn: {
    justifyContent: "center"
  },
  commentTextField: {
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15
  },
  pageDots: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    backgroundColor: 'white',
    height: 40,
    width: '80%',
    borderWidth: 2,
    borderColor: '#696969',
    borderRadius: 30,
    paddingHorizontal: 10
  },
  discussionContainer: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: 'center',
    padding: 25,
    borderRadius: 10,
    marginBottom: 30
  },
  postContainer: {
    backgroundColor: "#f0ffff",
    alignSelf: 'center',
    padding: 25,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'turquoise',
    marginBottom: 10
  },
  post: {
    fontSize: 16,
    alignContent: "center"
  },
  postDatetime: {
    paddingTop: 5,
    textAlign: "right"
  },
  usernameHeader:{
    marginBottom: 10
  },
  replyContainer: {
    padding: 15,
    marginTop: 10,
    marginRight: 35,
    borderColor: "turquoise",
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16
  },
  replyContainerExternal: {
    padding: 15,
    marginTop: 10,
    marginLeft: 35,
    borderColor: "turquoise",
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#c4c4c4",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "turquoise",
  },
});
export default Forum;
