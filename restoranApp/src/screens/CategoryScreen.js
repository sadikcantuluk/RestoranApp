import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoryScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    
    const handlePressFood = () => {
      navigation.navigate("FoodOverview");
    };

    return (
      <CategoryGrid
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
        pressFood={handlePressFood}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
