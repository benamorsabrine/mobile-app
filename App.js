import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/login/LoginScreen";
import TechAcceuil from "./src/screens/technicien/TechAcceuil";
import ReclamManager from "./src/screens/manager/ReclamManager";
import AlerteManager from "./src/screens/manager/AlerteManager";
import ClientAcceui from "./src/screens/client/ClienAcceuilt";
import ReclamClient from "./src/screens/client/ReclamClient";
import ManagerAcceuil from "./src/screens/manager/ManagerAcceuil";
import TechPage from "./src/screens/technicien/TechPage";
import TechForm from "./src/screens/technicien/TechForm";
import Detailsrapp from "./src/components/Det";
import { AuthContext } from "./src/context/AuthContext";

import ToDo from "./src/screens/technicien/Todo";
import Rapport from "./src/screens/technicien/Rapport";
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="logPage" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="TechPage" component={TechPage}></Stack.Screen>
        <Stack.Screen name="TechForm" component={TechForm}></Stack.Screen>
        <Stack.Screen name="ToDo" component={ToDo}></Stack.Screen>
        <Stack.Screen name="Rapport" component={Rapport}></Stack.Screen>
        <Stack.Screen name="Detailsrapp" component={Detailsrapp}></Stack.Screen>
        <Stack.Screen
          name="ReclamManager"
          component={ReclamManager}
        ></Stack.Screen>
        <Stack.Screen
          name="ManagerAcceuil"
          component={ManagerAcceuil}
        ></Stack.Screen>
        <Stack.Screen
          name="ClientAcceuil"
          component={ClientAcceui}
        ></Stack.Screen>
        <Stack.Screen
          name="ReclamClient"
          component={ReclamClient}
        ></Stack.Screen>
        <Stack.Screen name="TechAcceuil" component={TechAcceuil}></Stack.Screen>

        <Stack.Screen
          name="AlerteManager"
          component={AlerteManager}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
