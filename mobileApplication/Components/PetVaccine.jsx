import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConversationsPage from "../Pages/Conversations/ConversationsPage";
import AddPetForm from "../Pages/AddPetForm";
import HomePage from "../Pages/HomePage";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { green } from "@mui/material/colors";
import ForumTopics from "../Pages/Forums/ForumTopics";

export default function PetVaccine(props, { navigation }) {
    return(
        <View style = {styles.vaccineContainer}>
            <Text style={styles.text}>
                {props.vaccineName}
            </Text>
            <Text style={styles.text}>
            {props.vaccineDate}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Montserrat-Regular"
    },
    vaccineContainer:{
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        flexDirection:'row',
        alignItems:'center'
    },
})