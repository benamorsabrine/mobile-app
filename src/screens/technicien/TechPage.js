import { View, Button } from "react-native";
import React from "react";
import CardReclam from "../../components/CardReclam";
import { StyleSheet } from "react-native";
import Alerte from "../../components/Alerte";
import { useState, useEffect } from "react";
import Logout from "../../components/Logout";

const TechPage = () => {
  return (
    <View>
      <CardReclam></CardReclam>
      <Logout></Logout>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#b22222",
    marginLeft: 15,
    marginTop: 30,
    marginBottom: -50,
  },
  title: {
    fontSize: 24,

    fontFamily: "",
    color: "black",
    letterSpacing: 1,
    marginLeft: 50,
    marginTop: 20,
    marginBottom: -10,
  },
});
export default TechPage;
