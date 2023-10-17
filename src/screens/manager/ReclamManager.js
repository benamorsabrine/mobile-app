import { View, Text } from "react-native";
import React from "react";
import CardReclam from "../../components/CardReclam";
import { StyleSheet } from "react-native";

const ReclamManager = () => {
  return (
    <View>
      <Text style={styles.title}> Réclamations</Text>
      <CardReclam></CardReclam>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default ReclamManager;
