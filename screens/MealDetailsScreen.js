import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import { Colors } from "../constants/colors";

export default function MealDetailsScreen() {
  return (
    <View style={styles.container}>
      <MealDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Beige,
    flex: 1,
  },
});
