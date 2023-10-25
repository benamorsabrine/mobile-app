import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import TechForm from "../screens/technicien/TechForm";
import TechPage from "../screens/technicien/TechPage";
import LoginScreen from "../screens/login/LoginScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          // Add logic for the button
          console.log("Button pressed!");
        }}
        style={{ marginLeft: 90 }}
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Add logic for the button
          console.log("Button pressed!");
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
      <Drawer.Navigator initialRouteName="logPage">
        <Drawer.Screen name="logPage" component={LoginScreen} />
        <Drawer.Screen name="TechForm">
          {() => (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="TechHome">
                {() => (
                  <Drawer.Navigator>
                    <Drawer.Screen name="Reclamations" component={TechPage} />
                    <Drawer.Screen
                      name="Fiche intervention"
                      component={TechForm}
                    />
                    <Drawer.Screen
                      name="Technicien"
                      options={({ route }) => ({
                        headerTitle: (props) => (
                          <CustomHeader {...props} title={route.name} />
                        ),
                      })}
                      component={TechPage}
                    />
                  </Drawer.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
