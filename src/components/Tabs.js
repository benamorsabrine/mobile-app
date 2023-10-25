 /*import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import TechPage from "../screens/technicien/TechPage";
import TechForm from "../screens/technicien/TechForm";
const homeImage = require("/Users/user/my-app - Copie (2)/my-app-f/assets/images/home.png");
const CustomTabBarButton = ({})
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TechForm"
        component={TechForm}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={homeImage}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="TechPage"
        component={TechPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={homeImage}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  tintColor: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                {" "}
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tab: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#fffff",
    borderRadius: 15,
    height: 90,
    shadowColor: "#7F5DF0",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
}); */
