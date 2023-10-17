import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../../components/Card";
export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")} </Text>
        <Text>{navigation.getParam("body")} </Text>
        <Text>{navigation.getParam("rating")} </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
