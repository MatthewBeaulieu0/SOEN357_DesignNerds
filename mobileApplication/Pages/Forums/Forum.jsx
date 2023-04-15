import React from "react";
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
import {Stack} from "react-native-flex-layout";
import Ionicons from "@expo/vector-icons/Ionicons";

function Forum({navigation}) {
  function handlePostComment() {
    //TODO: complete comment posting later
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Topic A</Text>
      <ScrollView>
        <View>
          <Text style={styles.subtitle}>Username here</Text>
          <Text>Description</Text>
        </View>
        <View style={styles.commentTextField}>
          <Stack direction="row" spacing={15}>
            <TextInput style={styles.input} placeholder="Add a comment"/>
            <TouchableOpacity style={styles.sendBtn} onPress={handlePostComment}>
              <Ionicons name="send-outline" size={30}/>
            </TouchableOpacity>
          </Stack>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    marginTop: 80
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
  }, text: {
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
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
    backgroundColor: 'white',
    height: 40,
    width: '80%',
    borderWidth: 2,
    borderColor: '#696969',
    borderRadius: 30,
    paddingHorizontal: 10
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
