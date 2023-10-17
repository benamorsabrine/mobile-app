import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";
import ReclamClient from "./ReclamClient";

const ClientAcceuil = ({ navigation }) => {
  const handleAlerte = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("ReclamClient");
  };
  const handleReclamManager = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("ReclamClient");
  };
  const handleRapports = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("ReclamClient");
  };
  return (
    <View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={handleAlerte}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Réclamations</Text>
      </View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red"
          onPress={handleReclamManager}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Historique des interventions</Text>
      </View>
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

export default ClientAcceuil;
