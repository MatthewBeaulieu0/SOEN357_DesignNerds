import React from "react";
import {SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const ForumTopics = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forum Topics</Text>
      <TextInput style={styles.input} placeholder="Search topics"/>
      <SectionList
        sections={[
          {title: "A", data: ["Allergies", "Arthritis", "Asthma"]},
          {title: "B", data: ["Bleeding", "Blindness"]},
          {title: "C", data: ["Canine cognitive dysfunction", "Cataracts", "Covid-19"]},
          {title: "D", data: ["Declawing", "Dental Care", "Dermatitis", "Diarrhea", "Diet", "Drowsiness"]},
          {title: "E", data: ["Endometriosis", "Epilepsy"]},
          {title: "F", data: ["Fainting", "Fleas", "Fungus"]},
          {title: "G", data: ["Gingivitis", "Grooming", "Growling"]},
          {title: "H", data: ["Hair loss", "Halitosis", "Hearing loss", "Heart worm", "Hip dysplasia"]},
          {title: "I", data: ["Infection", "Indigestion"]},
          {title: "J", data: ["Joint pain"]},
          {title: "K", data: ["Kennel Cough"]},
          {title: "L", data: ["Lactose Intolerance", "Lice"]},
          {title: "M", data: ["Mucus"]},
          {title: "N", data: ["Nausea"]},
          {title: "O", data: ["Osteoarthritis"]},
          {title: "P", data: ["Pulmonary Hypertension"]},
          {title: "Q", data: ["Q Fever"]},
          {title: "R", data: ["Rabies", "Ringworm"]},
          {title: "S", data: ["Sweating", "Sleep Apnea", "Snoring", "Seizures"]},
          {title: "T", data: ["Ticks", "Tuberculosis"]},
          {title: "U", data: ["Ulcers", "Urinary Tract Infection"]},
          {title: "V", data: ["Vaccination", "Vomiting"]},
          {title: "W", data: ["Warts", "Worms"]},
          {title: "X", data: ["X-Rays"]},
          {title: "Y", data: ["Yellow Fever"]},
          {title: "Z", data: ["Zika virus", "Zoonoses"]},
        ]}
        renderItem={({item}) => {
          if (item === 'Covid-19') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Forum")}>
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            )
          } else {
            return (<Text style={styles.item}>{item}</Text>)
          }
        }}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#f2f2f2",
    marginTop: 80
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 5
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    borderRadius: 5,
    backgroundColor: "turquoise",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  addBtn: {
    padding: 30,
    color: 'purple',
    backgroundColor: "turquoise"
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20
  }
});

export default ForumTopics;
