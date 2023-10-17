import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";
import ReclamManager from "./ReclamManager";
import AlerteManager from "./AlerteManager";

const ManagerAcceuil = ({ navigation }) => {
  const handleAlerte = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("AlerteManager");
  };
  const handleReclamManager = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("ReclamManager");
  };
  const handleRapports = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("ReclamManager");
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
        <Text style={styles.text}>Alertes</Text>
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
        <Text style={styles.text}>Liste des interventions</Text>
      </View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={handleRapports}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Rapports</Text>
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
    marginTop: 80,
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

export default ManagerAcceuil;
