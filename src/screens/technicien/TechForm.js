import React, { Component } from "react";
import Logout from "../../components/Logout";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class TechForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field5: "",
      field6: "",
      field7: "",
    };
  }

  handleNameChange = (field1, text) => {
    this.setState({ [field1]: text });
  };
  handleClientChange = (field2, text) => {
    this.setState({ [field2]: text });
  };
  handleNameChange = (field1, text) => {
    this.setState({ [field1]: text });
  };
  handleEquipChange = (field3, text) => {
    this.setState({ [field3]: text });
  };
  handleNaturePanneChange = (field4, text) => {
    this.setState({ [field4]: text });
  };
  handleHeureDebutChange = (field5, text) => {
    this.setState({ [field5]: text });
  };
  handleHeureClotureChange = (field6, text) => {
    this.setState({ [field6]: text });
  };
  handleDateChange = (field7, text) => {
    this.setState({ [field7]: text });
  };

  handleSubmit = () => {
    // Vous pouvez traiter les données du formulaire ici
    const { field1, field2, field3, field4, field5, field6, field7 } =
      this.state;
    console.log("Field 1:", field1);
    console.log("Field 2:", field2);
    console.log("Field 3:", field3);
    console.log("Field 4:", field4);
    console.log("Field 5:", field5);
    console.log("Field 6:", field6);
    console.log("Field 7:", field7);
    // Vous pouvez également envoyer les données à un serveur ici

    // Réinitialisez les champs du formulaire après la soumission si nécessaire
    this.setState({
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
    });
  };

  render() {
    return (
      <View>
        <Logout></Logout>

        <View style={styles.container}>
          <Text style={styles.text}> FICHE TECHNICIEN</Text>
          <TextInput
            style={styles.input}
            placeholder="Technicien"
            value={this.state.field1}
            onChangeText={(text) => this.handleNameChange("field1", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Client"
            value={this.state.field2}
            onChangeText={(text) => this.handleClientChange("field2", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Equipement"
            value={this.state.field3}
            onChangeText={(text) => this.handleEquipChange("field3", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nature panne"
            value={this.state.field4}
            onChangeText={(text) =>
              this.handleNaturePanneChange("field4", text)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Heure Debut"
            value={this.state.field5}
            onChangeText={(text) => this.handleHeureDebutChange("field5", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Heure cloture"
            value={this.state.field6}
            onChangeText={(text) =>
              this.handleHeureClotureChange("field6", text)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Date "
            value={this.state.field7}
            onChangeText={(text) => this.handleDateChange("field7", text)}
          />
          <TouchableHighlight
            style={styles.customButton}
            underlayColor="red" // Background color when pressed
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Clôturer</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "green", // Background color of the button
    borderRadius: 10,
    marginTop: 20,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginLeft: 30,
  },
  buttonText: {
    color: "white", // Text color of the button
    fontWeight: "bold",
  },
  text: {
    color: "black",
    marginLeft: 50,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 20,

    borderRadius: 10,
    width: 200,
  },
  container: {
    marginTop: 50,
    width: 300,
    marginLeft: 40,
    backgroundColor: "#f8f8ff",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "#dcdcdc",
    marginTop: 20,
    borderRadius: 15,
    height: 40,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "100%", // Utilisation de 100% pour occuper toute la largeur disponible
  },
});
