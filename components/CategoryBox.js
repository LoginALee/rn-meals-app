import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default function CategoryBox({ title, color, id }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("MealsOverview", { id, title })}
      style={[styles.container, { backgroundColor: color }]}
    >
      <View>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "18%",
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    height: "90%",
    width: "45%",
    shadowColor: "grey",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  itemText: {
    fontWeight: "500",
    fontSize: 22,
  },
});
