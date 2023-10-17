import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Alerte from "../../components/Alerte";
const AlerteManager = () => {
  return (
    <View>
      <Text style={styles.title}>Alertes</Text>
      <Alerte></Alerte>
      <Alerte></Alerte>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,

    fontFamily: "",
    color: "red",
    letterSpacing: 1,
    marginLeft: 50,
    marginTop: 20,
    marginBottom: -10,
  },
});

export default AlerteManager;
