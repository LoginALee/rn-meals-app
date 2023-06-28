import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function renderMeal(itemData) {
  return (
    <View style={styles.imagesContainer}>
      <MealItem meal={itemData.item} />
    </View>
  );
}

export default function MealsList({ meals }) {
  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={renderMeal}
      numColumns={1}
    />
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
