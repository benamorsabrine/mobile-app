import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native"; // Importez TouchableOpacity

import LoginScreen from "../screens/login/LoginScreen";
import TechForm from "../screens/technicien/TechForm";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyCardReclam from "./CardReclam";
import TechPage from "../screens/technicien/TechPage";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          // Ajoutez ici la logique pour le bouton
          console.log("Bouton appuyé !");
        }}
        style={{ marginLeft: 90 }}
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Ajoutez ici la logique pour le bouton
          console.log("Bouton appuyé !");
        }}
        style={{ marginLeft: 30 }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {() => (
            <Drawer.Navigator>
              <Drawer.Screen
                name="Historique "
                component={LoginScreen}
              ></Drawer.Screen>
              <Drawer.Screen
                name="Fiche intervention"
                component={TechForm}
              ></Drawer.Screen>
              <Drawer.Screen
                name="Technicien"
                options={({ route }) => ({
                  headerTitle: (props) => (
                    <CustomHeader {...props} title={route.name} />
                  ),
                })}
                component={TechPage}
              ></Drawer.Screen>
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
