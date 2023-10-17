import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";
import TechForm from "./TechForm";
import ScanQr from "../../components/ScanQr";
const TechAcceuil = ({ navigation }) => {
  const handleReclamBut = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("TechPage");
  };
  const handleHistoriqBut = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("scanne");
  };

  return (
    <View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={handleHistoriqBut}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Historique des interventions</Text>
      </View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={handleReclamBut}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Liste des Reclamations</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#dc143c",
    fontSize: 14,
    textAlign: "center",
  },
  customButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#dc143c", // Couleur de fond du bouton
    justifyContent: "center", // Alignement vertical au centre
    alignItems: "center",
    marginTop: 120,
    marginLeft: 140, // Alignement horizontal au centre
  },
  buttonContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white", // Couleur du texte
  },
});

export default TechAcceuil;
