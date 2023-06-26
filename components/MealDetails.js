import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function MealDetails() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: route.params.meal.imageUrl }}
      />
      <Text style={styles.title}>{route.params.meal.title}</Text>
      <View style={styles.iconsContainer}>
        {route.params.meal.isGlutenFree ? (
          <MaterialCommunityIcons
            name="bread-slice-outline"
            size={20}
            color={Colors.Blue}
          />
        ) : (
          <MaterialCommunityIcons
            name="bread-slice"
            size={20}
            color={Colors.Blue}
          />
        )}
        {route.params.meal.isVegan ? (
          <MaterialCommunityIcons
            name="food-apple"
            size={20}
            color={Colors.Blue}
          />
        ) : (
          <MaterialCommunityIcons
            name="food-apple-outline"
            size={20}
            color={Colors.Blue}
          />
        )}
        {route.params.meal.isVegetarian ? (
          <MaterialCommunityIcons
            name="food-drumstick-outline"
            size={20}
            color={Colors.Blue}
          />
        ) : (
          <MaterialCommunityIcons
            name="food-drumstick"
            size={20}
            color={Colors.Blue}
          />
        )}
        {route.params.meal.isLactoseFree ? (
          <MaterialCommunityIcons
            name="cow-off"
            size={20}
            color={Colors.Blue}
          />
        ) : (
          <MaterialCommunityIcons name="cow" size={20} color={Colors.Blue} />
        )}
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{route.params.meal.duration} min</Text>
        <AntDesign name="clockcircle" size={20} color={Colors.Blue} />
      </View>
      <Text style={styles.subTitle}>Ingredients</Text>
      <View style={styles.ingredientsContainer}>
        <ScrollView>
          {route.params.meal.ingredients.map((ingredient) => (
            <Text style={styles.ingredient}>{ingredient}</Text>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.subTitle}>Steps</Text>
      <View style={styles.stepsContainer}>
        <ScrollView>
          {route.params.meal.steps.map((step, index) => (
            <Text style={styles.step}>
              {index + 1}.- {step}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "900",
    color: Colors.Cerise,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    color: Colors.Cerise,
    marginBottom: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  time: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Colors.Blue,
  },
  ingredientsContainer: {
    marginHorizontal: 30,
    flexDirection: "column",
    marginBottom: 10,
    justifyContent: "center",
    height: 70,
  },
  ingredient: {
    padding: 5,
    backgroundColor: Colors.Yellow,
    width: 330,
    marginVertical: 5,
    fontSize: 18,
    color: Colors.Blue,
    borderWidth: 1,
    textAlign: "center",
  },
  stepsContainer: {
    marginHorizontal: 30,
    flexDirection: "column",
    marginBottom: 10,
    justifyContent: "center",
    height: 160,
  },
  step: {
    padding: 5,
    backgroundColor: Colors.Yellow,
    width: 330,
    marginVertical: 5,
    fontSize: 18,
    color: Colors.Blue,
    borderWidth: 1,
    textAlign: "center",
  },
});
