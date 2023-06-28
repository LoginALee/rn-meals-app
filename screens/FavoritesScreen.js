import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/FavoritesContext";
import { Colors } from "../constants/colors";
import MealsList from "../components/MealsList";

export default function FavoritesScreen() {
  const FavoritesCtx = useContext(FavoritesContext);
  const Meals = MEALS.filter((item) =>
    FavoritesCtx.favoritesIds.includes(item.id)
  );

  return (
    <View style={styles.container}>
      <MealsList meals={Meals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.Beige, flex: 1 },
});
