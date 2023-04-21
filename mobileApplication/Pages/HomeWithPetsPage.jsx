import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import image from "../static/images/PetImage1.png";
import Header from "../Components/header";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
function PetCard({ name, age, breed, imageSource, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.ageText}>{age} years old</Text>
                <Text style={styles.breedText}>{breed}</Text>
            </View>
        </TouchableOpacity>
    );
}

function HomeWithPetsPage({ navigation, route }) {
    const imageSources = [
        require("../static/images/PetImage2.png"),
        require("../static/images/PetImage1.png"),
        require("../static/images/PetImage3.jpg"),
        // add more images here
    ];
    const [pets, setPets] = useState([]);

    useEffect(() => {
        console.log(pets);
        const petsRef = collection(db, "pets");
        const unsubscribe = onSnapshot(petsRef, (snapshot) => {
            const petsData = [];
            snapshot.forEach((doc) => {
                const pet = doc.data();
                petsData.push(pet);
            });
            setPets(petsData);
        });
        return unsubscribe;
    }, []);

    //unsure about this line?  const { firstName } = route.params; didnt work for me
    const firstName = route && route.params && route.params.firstName;

    const handlePetComponentClick = (
        petName,
        birthDate,
        breed,
        vaccines,
        imageSource
    ) => {
        const pet = {
            petName: petName,
            birthDate: birthDate,
            breed: breed,
            vaccines: vaccines,
        };
        console.log(pet);
        console.log(firstName);
        navigation.navigate("PetProfile", {
            pet: pet,
            firstName: firstName,
        });
    };
    const calculateAge = (birthDate) => {
        if (!birthDate) {
            return 0;
        }
        const [day, month, year] = birthDate.split("/");
        const today = new Date();
        const birthDateObject = new Date(year, month - 1, day);
        let age = today.getFullYear() - birthDateObject.getFullYear();
        const monthDiff = today.getMonth() - birthDateObject.getMonth();
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDateObject.getDate())
        ) {
            age--;
        }
        console.log(age);
        return age.toString();
    };

    return (
        <SafeAreaView style={styles.pageContainer}>
            <Header firstName={firstName} />
            <Text style={styles.title}>My Pets</Text>
            {pets.map((pet, index) => (
                <PetCard
                    key={index}
                    name={pet.petName}
                    age={calculateAge(pet.birthDate)}
                    breed={pet.breed}
                    imageSource={imageSources[index % imageSources.length]}
                    onPress={() =>
                        handlePetComponentClick(
                            pet.petName,
                            pet.birthDate,
                            pet.breed,
                            pet.vaccines
                        )
                    }
                />
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#ccc",
        padding: 30,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 60, // add margin bottom to create space between components
        marginLeft: 15,
        marginRight: 15,
    },
    pageContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        width: 85, // increase the width of the image
        height: 85, // increase the height of the image
        marginRight: 10,
        borderRadius: 35, // adjust border radius to match the new size
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: 25, // increase font size
        fontWeight: "bold",
    },
    ageText: {
        fontSize: 20, // increase font size
        marginBottom: 5, // add margin bottom to create space between texts
    },
    breedText: {
        fontSize: 20, // increase font size
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 30,
        textAlign: "center",
    },
});

export default HomeWithPetsPage;
