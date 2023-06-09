import React from "react";
import { Image, Text, StyleSheet, View, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({ meal }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Meal Details", { meal })}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.iconsContainer}>
            {meal.isGlutenFree ? (
              <MaterialCommunityIcons
                name="bread-slice-outline"
                size={20}
                color={Colors.Beige}
              />
            ) : (
              <MaterialCommunityIcons
                name="bread-slice"
                size={20}
                color={Colors.Beige}
              />
            )}
            {meal.isVegan ? (
              <MaterialCommunityIcons
                name="food-apple"
                size={20}
                color={Colors.Beige}
              />
            ) : (
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={20}
                color={Colors.Beige}
              />
            )}
            {meal.isVegetarian ? (
              <MaterialCommunityIcons
                name="food-drumstick-outline"
                size={20}
                color={Colors.Beige}
              />
            ) : (
              <MaterialCommunityIcons
                name="food-drumstick"
                size={20}
                color={Colors.Beige}
              />
            )}
            {meal.isLactoseFree ? (
              <MaterialCommunityIcons
                name="cow-off"
                size={20}
                color={Colors.Beige}
              />
            ) : (
              <MaterialCommunityIcons
                name="cow"
                size={20}
                color={Colors.Beige}
              />
            )}
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{meal.duration} min</Text>
            <AntDesign name="clockcircle" size={20} color="white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    backgroundColor: Colors.Cerise,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 320,
    padding: 6,
    flexDirection: "column",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    marginTop: 10,
    marginBottom: 3,
    textAlign: "center",
  },
  timeContainer: { flexDirection: "row", justifyContent: "center" },
  time: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "white",
  },
});
