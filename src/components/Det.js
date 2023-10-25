const userImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/user.png");
const bankImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/bank.png");
const localImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/local.png");
const doneImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/done.png");
const dateImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/date.png");

const redlocalImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/1789298.png");
const timeImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/time.png");
const redBankImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/redBank.png");
const techImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/tech.png");
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Logout from "./Logout";

// ... (other imports and constants)

const Detailsrapp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://192.168.74.54:3000/api/fiche/all")
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
                    <Image source={redBankImage} style={styles.image} />
                    <Text style={styles.title}>Client: </Text>
                    <Text style={styles.info}>{item.client}</Text>
                  </View>
                  <View style={styles.dir}>
                    <Image source={redlocalImage} style={styles.image} />
                    <Text style={styles.title}>Localisation: </Text>
                    <Text style={styles.info}>{item.localisation}</Text>
                  </View>
                  <View style={styles.dir}>
                    <Image source={techImage} style={styles.image} />
                    <Text style={styles.title}>Technicien: </Text>
                    <Text style={styles.info}>{item.technicien}</Text>
                  </View>
                  <View style={styles.dir}>
                    <Image source={timeImage} style={styles.image} />
                    <Text style={styles.title}>Heure Debut: </Text>
                    <Text style={styles.info}>{item.dateDebut}</Text>
                  </View>
                  <View style={styles.dir}>
                    <Image source={timeImage} style={styles.image} />
                    <Text style={styles.title}>Heure Fin: </Text>
                    <Text style={styles.info}>{item.dateFin}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
      <Logout></Logout>
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
    marginLeft: 10,
    alignItems: "center",
  },
  dir: {
    marginBottom: 2,
    marginTop: 1,
    flexDirection: "row",
    marginRight: 12,
    marginLeft: 10,
  },

  etat: {
    color: "red",
  },
  info: {
    color: "#696969",
    fontSize: 14,
    marginTop: 2,
  },
  title: {
    fontWeight: "bold",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 2,
  },

  card: {
    flexDirection: "column",
    padding: 18,
    paddingLeft: 10,
    marginTop: 40,
    borderRadius: 6,
    width: 350,
    height: 200,
    marginLeft: 15,
    elevation: 3,
    backgroundColor: "#f5f5f5",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    marginVertical: 10,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#b22222",
  },
});

export default Detailsrapp;
