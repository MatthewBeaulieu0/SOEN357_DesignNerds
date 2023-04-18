import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConversationsPage from "../Pages/Conversations/ConversationsPage";
import AddPetForm from "../Pages/AddPetForm";
import HomePage from "../Pages/HomePage";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { green } from "@mui/material/colors";
import ForumTopics from "../Pages/Forums/ForumTopics";

const Tab = createBottomTabNavigator();

const AddTabButton = (children, onPress) => {
  <TouchableOpacity onPress={onPress} style={styles.addBtn}>
    <View style={styles.addBtnView}>{children}</View>
  </TouchableOpacity>;
};

export default function BottomNavigation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: [
          {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ccf9fb",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
          null,
        ],
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        initialParams={{ firstName: "marianne" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name="home"
                size={25}
                color={focused ? "#227970" : "black"}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="chats"
        component={ConversationsPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name="chatbubble-ellipses"
                size={25}
                color={focused ? "#227970" : "black"}
              />

              <Text>Chat</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="addPet"
        component={AddPetForm}
        initialParams={{ firstName: "marianne" }}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  name: "AddPetForm",
                  params: { firstName: "marianne" },
                });
              }}
              style={styles.addBtn}
            >
              <View style={styles.addBtnView}>
                <Ionicons name="add" size={50} color="white" style={{}} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="forum"
        component={ForumTopics}
        initialParams={{ firstName: "marianne" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name="earth"
                size={25}
                color={focused ? "#227970" : "black"}
              />
              <Text>Forum</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ForumTopics}
        initialParams={{ firstName: "marianne" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name="person"
                size={25}
                color={focused ? "#227970" : "black"}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#75f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  addBtn: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#75f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addBtnView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "turquoise",
    justifyContent: "center",
    alignItems: "center",
  },
});
