import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryBox from "../components/CategoryBox";
import { Colors } from "../constants/colors";

function renderCategory(itemData) {
  return (
    <CategoryBox
      title={itemData.item.title}
      color={itemData.item.color}
      id={itemData.item.id}
    />
  );
}

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Beige,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
