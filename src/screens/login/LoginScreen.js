import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Navbar from "../../components/Navbar";
import TechPage from "../technicien/TechPage";
import ManagerAcceuil from "../manager/ManagerAcceuil";
import TechAcceuil from "../technicien/TechAcceuil";
import MyAppBar from "../../components/Tabs";
const loginImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/tunisyslogo.png");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    // Envoyer la requête au serveur
    fetch("http://192.168.74.54:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            if (data.role == "tech") {
              console.log("Données de reponse", data);
              navigation.navigate("TechAcceuil");
            } else if (data.role == "manager") {
              navigation.navigate("ManagerAcceuil");
              console.log("Vous etes un helpdesk");
            } else if (data.role == "client") {
              navigation.navigate("ClientAcceuil");
              console.log("Vous etes un client");
            }
          });
        } else {
          setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête de connexion :", error);
        setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
      });
  };

  return (

     

      <View style={styles.container}>
        <Image source={loginImage} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 90,
    marginBottom: 20,
    marginTop: -60,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop:300,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: "#b22222",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
