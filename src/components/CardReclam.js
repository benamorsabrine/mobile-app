const userImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/tech.png");
const bankImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/redBank.png");
const localImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/1789298.png");
const doneImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/done.png");
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// ... (other imports and constants)

const CardReclam = () => {
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

  return (
    <View>
      {loading ? (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 200,
          }}
        >
          <Text style={{ marginLeft: 10, color: "#b22222", fontSize: 25 }}>
            Welcome To Your Page{" "}
          </Text>
          <ActivityIndicator size="large" color="#b22222" />
        </View>
      ) : (
        <View>
          {data.map((item, index) => (
            <View key={index}>
              <View style={styles.card}>
                {/**user */}
                <View style={styles.dir}>
                  <Image source={bankImage} style={styles.image} />
                  <Text style={styles.title}>client: </Text>
                  <Text>{item.client}</Text>
                </View>

                {/**localisation*/}
                <View style={styles.dir}>
                  <Image source={localImage} style={styles.image} />
                  <Text style={styles.title}>Localisation: </Text>
                  <Text>{item.localisation}</Text>
                </View>
                {/**technicien */}
                <View style={styles.dir}>
                  <Image source={userImage} style={styles.image} />
                  <Text style={styles.title}>Traiteur: </Text>
                  <Text>{item.traiteur}</Text>
                </View>

                {/**etat button */}
                <TouchableOpacity
                  style={[
                    styles.etatButton,
                    item.etat === "Cloturée"
                      ? styles.etatButtonGreen // Vert pour "Cloturée"
                      : item.etat === "Affectée"
                      ? styles.etatButtonBlue // Bleu pour "Affectée"
                      : item.etat === "Reportée"
                      ? styles.etatButtonGray // Gris pour les autres états
                      : item.etat === "En attente"
                      ? styles.etatButtonRed // Gris pour les autres états
                      : styles.etatButtonBlack,
                  ]}
                >
                  <Text style={styles.etatButtonText}>{item.etat}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (other styles)

  etatButton: {
    backgroundColor: "red",
    borderRadius: 5,
    width: 60,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  etatButtonRed: {
    backgroundColor: "red",
  },
  etatButtonBlue: {
    backgroundColor: "#1e90ff",
  },
  etatButtonGray: {
    backgroundColor: "grey",
  },
  etatButtonGreen: {
    backgroundColor: "green",
  },
  etatButtonBlack: {
    backgroundColor: "#1e90ff",
  },
  etatButtonText: {
    color: "white",
    fontSize: 12,
    fontStyle: "italic",
  },

  etatimage: {
    width: 20, // Width adjusted to be visible
    height: 20,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 15,
    alignItems: "center",
  },
  dir: {
    marginBottom: 2,
    marginTop: 1,
    flexDirection: "column",
    marginRight: 12,
    marginLeft: 10,
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
    marginTop: 10,
  },

  card: {
    flexDirection: "row",
    padding: 18,
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 6,
    width: 350,
    height: 130,
    marginLeft: 15,
    elevation: 3,
    backgroundColor: "#f5f5f5",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#b22222",
  },
});

export default CardReclam;
