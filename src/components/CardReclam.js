import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardReclam(props) {
  const handleReclam = async () => {
    const navigation = useNavigation();
    try {
      navigation.navigate("");
    } catch (error) {
      console.error("Erreur de stockage dans AsyncStorage : ", error);
    }
  };
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.dir}>
          <Text style={styles.title}> id : </Text>
          <Text style={styles.info}> N°12365980 </Text>
        </View>
        <View style={styles.dir}>
          <Text style={styles.title}> Technicien : </Text>
          <Text style={styles.info}> Ahmed</Text>
        </View>
        <View style={styles.dir}>
          <Text style={styles.title}> Client : </Text>
          <Text style={styles.info}> Amen Bank </Text>
        </View>
        <Text style={styles.button}> Cloturée</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.dir}>
          <Text style={styles.title}> id : </Text>
          <Text style={styles.info}> N°12365980 </Text>
        </View>
        <View style={styles.dir}>
          <Text style={styles.title}> Technicien : </Text>
          <Text style={styles.info}> Ahmed</Text>
        </View>
        <View style={styles.dir}>
          <Text style={styles.title}> Client : </Text>
          <Text style={styles.info}> Amen Bank </Text>
        </View>
        <Text style={styles.button}> Cloturée</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.dir}>
          <Text style={styles.title}> id : </Text>
          <Text style={styles.info}> N°12365980 </Text>
        </View>
        <View style={styles.dir}>
          <Text style={styles.title}> Technicien : </Text>
          <Text style={styles.info}> Ahmed</Text>
        </View>
        <View style={styles.dir}>
          <Text style={styles.title}> Client : </Text>
          <Text style={styles.info}> Amen Bank </Text>
        </View>
        <Text style={styles.button}> Cloturée</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dir: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "green",
    marginLeft: 180,
    width: 70,
    marginTop: 12,
    borderRadius: 5,
    padding: 5,
    color: "white",
    fontSize: 12,
    marginLeft: 80,
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
    display: "flex",
    marginBottom: -15,
    borderRadius: 6,
    width: 280,
    height: 120,
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
