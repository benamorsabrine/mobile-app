import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import TechForm from "./TechForm";
import Logout from "../../components/Logout";
const rapportImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/rapport.png");
const settingImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/settings.png");
const TechAcceuil = ({ navigation }) => {
  const handleReclamBut = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("TechPage");
  };
  const handleHistoriqBut = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("Rapport");
  };
  const ToDoBut = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("ToDo");
  };

  return (
    <View>
      <Navbar></Navbar>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={handleHistoriqBut}
        >
          <View style={styles.buttonContent}>
            <Image source={rapportImage} style={styles.image} />
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Rapports</Text>
      </View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={handleReclamBut}
        >
          <View style={styles.buttonContent}>
            <Image source={settingImage} style={styles.image} />
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>Reclamations</Text>
      </View>
      <View>
        <TouchableHighlight
          style={styles.customButton}
          underlayColor="red" // Couleur de fond lorsque pressé
          onPress={ToDoBut}
        >
          <View style={styles.buttonContent}>
            <Image source={settingImage} style={styles.image} />
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>To Do</Text>
      </View>
      <Logout></Logout>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
  },
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

export default TechAcceuil;
