import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Colors } from "../constants/colors";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const favoritesIds = useSelector((state) => state.favorites.favoritesIds);
  const Meals = MEALS.filter((item) => favoritesIds.includes(item.id));

  return (
    <View style={styles.container}>
      {Meals.length > 0 ? (
        <MealsList meals={Meals} />
      ) : (
        <Text style={styles.text}>You have no favorite Meals yet! </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.Beige, flex: 1 },
  text: {
    margin: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    color: Colors.Blue,
  },
});
