import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { Colors } from "../constants/colors";
import MealsList from "../components/MealsList";

export default function MealsOverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const Meals = MEALS.filter((item) =>
    item.categoryIds.includes(route.params.id)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === route.params.id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MealsList meals={Meals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.Beige },
});
