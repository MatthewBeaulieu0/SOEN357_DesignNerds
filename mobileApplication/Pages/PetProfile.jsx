import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { Icon } from 'react-native-elements'
import Header from "../Components/header";

export default function PetProfile({ route, navigation }) {
    const [petName, setPetName] = useState();
    const [petDob, setPetDob] = useState();
    const [vaccines, setVaccines] = useState([]);
    const [petPicture, setPetPicture] = useState();
    const { firstName } = route.params;
    const handleBackButton = () => {
        navigation.navigate("HomePage", { firstName: firstName });
    };
    return(
        <ScrollView>
            <Header firstName={firstName} />
            <Image style={styles.petPicture} source={require('../static/images/cutiepeanut.png')} />
            <View style={{backgroundColor: '#f2f2f2', transform:'translateY(-20em)', borderRadius:20}}>
            <TouchableOpacity style={styles.navBarLeftButton} onPress={handleBackButton}>
            <Icon
                name='arrow-back'
                type='fontawesome'
                color='black'
                style={styles.backIcon} />
                <Text style={styles.petName}>
                    Peanut
                </Text>
            </TouchableOpacity>
                
                <View style = {styles.lineStyle} />
                
                <Text style={styles.heading}>
                    Date of Birth
                </Text>
                <Text style={styles.mainText}>
                    2021-11-28
                </Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.heading}>
                    Vaccination History
                </Text>
                <View style = {styles.vaccineContainer}>
                    <Text>
                        Split Vaccine
                    </Text>
                    <Text>
                        03-12-2021
                    </Text>
                </View>
                <View style={styles.vaccineContainer}>
                    <Text>
                        Booster
                    </Text>
                    <Text>
                        03-26-2021
                    </Text>
                </View>
                <View style={styles.vaccineContainer}>
                    <Text>
                        Booster
                    </Text>
                    <Text>
                        04-07-2021
                    </Text>
                </View>
                
                
                <View style = {styles.lineStyle} />
            </View>
        </ScrollView>
    );


}
const styles = StyleSheet.create({
    navBarLeftButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 8
      },
    backIcon:{
        alignContents:'left'
    },
    petPicture: {
        height:275,
        width:"auto"

    },
    petInfoContainer: {
        color:"pink",
        transform: "translate(-10, 0)",
        height:200
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'grey',
        margin:10,
    },
    petName:{
        fontSize:32,
        marginLeft: 10
    },
    heading:{
        fontSize: 20,
        marginLeft: 10,
    },
    mainText:{
        marginLeft: 10,
    },
    // mainTextDate:{
    //     marginLeft: 10,
    //     display:'flex',
    //     alignItems:'right'
    // },
    vaccineContainer:{
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        flexDirection:'row',
        alignItems:'center'
    },
    // mainTextVaccine:{
    //     flex:1,
    //     paffing: 10
    // }

})