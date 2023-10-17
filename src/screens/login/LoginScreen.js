import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading, login } = useContext(AuthContext);

  const handleLogin = async () => {
    setErrorMessage(null);

    if (email === "t" && password === "t") {
      // Naviguez vers la page "TechAcceuil" après la connexion réussie
      navigation.navigate("TechAcceuil");
    } else if (email === "m" && password === "m") {
      // Naviguez vers la page "ManagerAcceuil" après la connexion réussie
      navigation.navigate("ManagerAcceuil");
    } else if (email === "client@gmail.com" && password === "client") {
      // Naviguez vers la page "ClientAcceuil" après la connexion réussie
      navigation.navigate("ClientAcceuil");
    } else {
      setErrorMessage("Email ou mot de passe incorrect.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#b22222",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
