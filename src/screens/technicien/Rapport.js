import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import Logout from "../../components/Logout";
const rapportImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/rapport.png");
const data = [
  { id: "1", title: "Élément 1" },
  { id: "2", title: "Élément 2" },

  // Ajoutez plus d'éléments au tableau si nécessaire
];

const Rapport = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://192.168.74.54:3000/api/rec/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleHistoriqBut = () => {
    // Action à exécuter lorsque le bouton est pressé
    console.log("Bouton pressé");
    navigation.navigate("Detailsrapp");
  };
  const renderItem = ({ item }) => (
    <View>
      <TouchableHighlight
        style={styles.customButton}
        underlayColor="red"
        onPress={handleHistoriqBut}
      >
        <View style={styles.buttonContent}>
          <Image source={rapportImage} style={styles.image} />
          <Text style={styles.title}>Rapports </Text>
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <View>

 
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    /> 
    <Logout></Logout>
      </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 285,
    alignItems: "center",
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    color: "white",
    marginTop: -40,
    marginLeft: 20,
  },
  buttonContent: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  item: {
    backgroundColor: "#e44d4d",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  customButton: {
    width: 360,
    height: 70,
    borderRadius: 5,
    backgroundColor: "#B80032", // Couleur de fond du bouton
    justifyContent: "center", // Alignement vertical au centre
    alignItems: "center",
    // Alignement horizontal au centre
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 20,
  },
});

export default Rapport;
