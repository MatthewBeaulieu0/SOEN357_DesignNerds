import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { HStack, Stack } from "react-native-flex-layout";
import { Avatar } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { Divider } from "@react-native-material/core";

import { auth, db } from "../../firebaseConfig";

function Forum({ navigation }) {
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [ansState, setAnsState] = useState("answer");

  const [messages, setMessages] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [inputText, setInputText] = useState("");
  const [lastQuestionIndex, setLastQuestionIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const userID = auth().currentUser.uid;

  function handlePostComment() {
    //TODO: complete comment posting later
    setOpenCommentInput(!openCommentInput);
  }

  const handleOpenCommentInput = (docId) => {
    setSelectedQuestion(docId);
    setOpenCommentInput(true);
  };

  const handleCreatePost = async () => {
    //  TODO: add post logic later

    if (openCommentInput) {
      const questionRef = doc(db, "questions", selectedQuestion);

      let anAnswer = {
        answer: inputText,
        userID: userID,
      };

      await updateDoc(questionRef, {
        answers: arrayUnion(anAnswer),
      });
    } else {
      let aQuestion = {
        answers: [],
        question: inputText,
        postId: lastQuestionIndex,
        userId: userID,
      };
      console.log(aQuestion);

      let adoc = await addDoc(collection(db, "questions"), {
        ...aQuestion,
      });

      console.log(adoc.id);
      const data = {
        docId: adoc.id,
      };

      await updateDoc(adoc, data)
        .then((adoc) => {
          console.log(
            "A New Document Field has been added to an existing document"
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleAskSwitch = () => {
    //  TODO: add post logic later
    setOpenCommentInput(false);
  };

  useEffect(() => {
    const questionRef = collection(db, "questions");
    const q = query(questionRef, orderBy("postId", "desc"));
    console.log(q);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setQuestions(
        querySnapshot.docs.map((doc) => ({
          postId: doc.data().postId,
          question: doc.data().question,
          userId: doc.data().userId,
          answers: doc.data().answers,
          docId: doc.data().docId,
        }))
      );
    });

    //console.log(questions)

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setLastQuestionIndex(questions.length);
  }, [questions]);

  const getAnswerText = async (answerId) => {
    let text = "undefined";
    const ref = doc(db, "answers", answerId);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      // Convert to City object
      const city = docSnap.data();
      console.log(city);
      text = city.answer;
      // Use a City instance method
      console.log(city.toString());
    } else {
      console.log("No such document!");
    }
    console.log(text);
    return text;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => {
          navigation.navigate("HomePage", { firstName: "Marianne" });
        }}
      >
        <HStack style={{ alignItems: "center" }}>
          <Ionicons name="chevron-back-outline" size={25} />
          <Text style={{ fontSize: 18 }}>Back</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0 }}
            onPress={handleAskSwitch}
          >
            <Text style={{ fontSize: 18, color: "turquoise" }}>Ask </Text>
          </TouchableOpacity>
        </HStack>
      </TouchableOpacity>
      <Text style={styles.title}>Covid-19</Text>
      <ScrollView>
        {questions.map((question) => (
          <View style={styles.discussionContainer}>
            <HStack spacing={10} style={styles.usernameHeader}>
              <Avatar
                rounded
                title={"RM"}
                size={25}
                minWidth={27}
                minHeight={27}
                overlayContainerStyle={{ backgroundColor: "#c5c5c5" }}
              />
              <Text style={styles.subtitle}>Roland Maxwell</Text>
            </HStack>
            <Text style={styles.post}>{question.question}</Text>
            <Text style={styles.postDatetime}>3 hrs ago</Text>
            <TouchableOpacity
              onPress={() => handleOpenCommentInput(question.docId)}
            >
              <Ionicons name="arrow-redo-outline" size={25} />
            </TouchableOpacity>

            {question.answers.map((answer) => (
              <HStack spacing={10}>
                <View style={styles.replyContainer}>
                  <Stack
                    direction="row"
                    spacing={10}
                    style={styles.usernameHeader}
                  >
                    <Avatar
                      rounded
                      size={25}
                      minWidth={27}
                      minHeight={27}
                      source={require("../../static/images/vet-avatar-female.png")}
                    />
                    <Text style={styles.subtitle}>
                      <Text style={styles.vetLabel}>M.D.</Text> Amelie Tremblay
                    </Text>
                  </Stack>
                  <Text>{answer.answer}</Text>
                </View>
              </HStack>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.commentTextField}>
        <Stack direction="row" spacing={15}>
          <TextInput
            style={styles.input}
            placeholder={
              openCommentInput ? "Write a comment..." : "Write something..."
            }
            value={inputText}
            onChangeText={(newText) => setInputText(newText)}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={handleCreatePost}>
            <Ionicons name="send-outline" size={30} />
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
    marginBottom: 20,
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
    color: "#000",
    fontWeight: "bold",
  },
  backArrow: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
  },
  vetLabel: {
    color: "#a445f8",
  },
  buttonContainer: {
    marginTop: 10,
    height: "43%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtn: {
    justifyContent: "center",
  },
  commentTextField: {
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  pageDots: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    backgroundColor: "white",
    height: 40,
    width: "80%",
    borderWidth: 2,
    borderColor: "#696969",
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  discussionContainer: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 25,
    borderRadius: 10,
    marginBottom: 30,
  },
  postContainer: {
    backgroundColor: "#f0ffff",
    alignSelf: "center",
    padding: 25,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "turquoise",
    marginBottom: 10,
  },
  post: {
    fontSize: 16,
    alignContent: "center",
  },
  postDatetime: {
    paddingTop: 5,
    textAlign: "right",
  },
  usernameHeader: {
    marginBottom: 10,
  },
  replyContainer: {
    padding: 15,
    marginTop: 10,
    marginRight: 35,
    borderColor: "turquoise",
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
  },
  replyContainerExternal: {
    padding: 15,
    marginTop: 10,
    marginLeft: 35,
    borderColor: "turquoise",
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
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
