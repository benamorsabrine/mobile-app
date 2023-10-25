import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const logoutImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/logout.png");

const Logout = () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    fetch("http://192.168.74.54:3000/api/user/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("logPage");
        } else {
          alert("Erreur de déconnexion");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.logoutButtonContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
        <Text style={styles.text}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 15,
  },
  logoutButtonContainer: {
    alignItems: "center",

    left: 10,
  },
  logoutButton: {
    marginTop: 9,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Logout;
