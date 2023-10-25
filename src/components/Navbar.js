import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const loginImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/whitehome.jpg");
const notifImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/notif.png");
import Logout from "./Logout";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image source={notifImage} style={styles.image} />
      <Logout></Logout>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#b22222",
    flexDirection: "row",
    width: 400,
    height: 45,
  },
  image: {
    width: 25,
    height: 25,
    marginLeft:220,
    marginTop:8,
  },
});
