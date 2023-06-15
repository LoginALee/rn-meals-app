import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { Colors } from "../constants/colors";

export default function MealsOverviewScreen() {
  const route = useRoute();

  const Meals = MEALS.filter((item) =>
    item.categoryIds.includes(route.params.id)
  );

  function renderMeal(itemData) {
    return (
      <View style={styles.imagesContainer}>
        <MealItem meal={itemData.item} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.Beige },
  imagesContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
