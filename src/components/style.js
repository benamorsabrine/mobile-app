/* const userImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/user.png");
const bankImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/bank.png");
const localImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/local.png");
const doneImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/done.png");
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";

export default function CardReclam(props) {
  const [reclamData, setReclamData] = useState([]);

  const handelData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.56.1:3000/api/rec/653130b2efa5f76c2a2a311a"
      );
      setReclamData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelData();
  }, []);

  return (
    <View>
      {reclamData.map((e, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.dir}>
            {/* <Image source={userImage} style={styles.image} />
            <Text style={styles.title}> Technicien : </Text>
            <Text style={styles.info}> {e.traiteur}</Text>
          </View>
          <View style={styles.dir}>
            {/*   <Image source={bankImage} style={styles.image} /> />*

            <Text style={styles.title}> Client : </Text>
            <Text style={styles.info}>{e.client}</Text>
          </View>
          <View style={styles.dir}>
            {/*   
            <Image source={localImage} style={styles.image} /> />

            <Text style={styles.title}> Localisation : </Text>
            <Text style={styles.info}>{e.localisation}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here

  etatimage: {
    width: 20, // Width adjusted to be visible
    height: 20,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 20,
  },
  dir: {
    marginBottom: 2,
    marginTop: 18,
  },
  clot: {
    backgroundColor: "green",
    height: 110,
    width: 60,
    paddingTop: 40,
    fontStyle: "italic",
    paddingLeft: 5,
    borderRadius: 5,
    color: "white",
    fontSize: 12,
    marginRight: 10,
  },
  rep: {
    backgroundColor: "grey",
    height: 110,
    width: 60,
    borderRadius: 5,
    color: "white",
    fontSize: 12,
    marginRight: 10,
    paddingTop: 40,
    fontStyle: "italic",
    paddingLeft: 3,
  },
  attente: {
    backgroundColor: "red",
    width: 60,
    height: 110,
    borderRadius: 5,
    color: "white",
    fontSize: 12,
    marginRight: 10,
    paddingTop: 40,
    fontStyle: "italic",
    paddingLeft: 11,
  },

  etat: {
    color: "red",
  },
  info: {
    color: "#696969",
    fontSize: 14,
  },
  title: {
    fontWeight: "bold",
    fontWeight: "600",
    fontSize: 14,
  },

  card: {
    flexDirection: "row",
    padding: 18,
    paddingLeft: 10,
    display: "flex",
    marginBottom: -15,
    borderRadius: 6,
    width: 350,
    height: 140,
    marginLeft: 20,
    elevation: 3,
    backgroundColor: "#f5f5f5",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    marginVertical: 40,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

 */