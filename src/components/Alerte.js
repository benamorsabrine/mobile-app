import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Alerte(props) {
  /* const handleReclam = async () => {
    const navigation = useNavigation();
    try {
      navigation.navigate("");
    } catch (error) {
      console.error("Erreur de stockage dans AsyncStorage : ", error);
    }
  }; */
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}> Technicien : </Text>
        <Text style={styles.info}> Ahmed </Text>
        <Text style={styles.title}> Client : </Text>
        <Text style={styles.info}> Amen Bank </Text>
        <Text style={styles.title}> Type : </Text>
        <Text style={styles.etat}> alerte </Text>
        <View>
          <Pressable style={styles.button} onPress={""}>
            <Text style={styles.text}>Details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    marginLeft: 180,
    width: 60,
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
  },
  etat: {
    color: "red",
  },
  info: {
    color: "#696969",
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontWeight: "600",
    fontSize: 12,
  },

  card: {
    padding: 18,

    marginBottom: -15,
    borderRadius: 6,
    width: 280,
    height: 160,
    marginLeft: 60,
    elevation: 3,
    backgroundColor: "#f5f5f5",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    marginVertical: 40,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
