import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodList from "../components/FoodList";

export default function FoodOverviewScreen({ route, navigation }) {
  
  const categoryId = route.params.categoryId;

  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <FoodList items={displayedFoods} />;
}

const styles = StyleSheet.create({});
