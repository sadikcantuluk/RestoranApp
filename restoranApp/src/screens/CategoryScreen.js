import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

export default function CategoryScreen({ navigation }) {
  const { text } = useSelector((store) => store.search);

  const renderCategoryItem = (itemData) => {
    const handlePressFood = () => {
      navigation.navigate("FoodOverview", { categoryId: itemData.item.id });
    };

    return itemData.item.title.toLowerCase().indexOf(text.toLowerCase()) >
      -1 ? (
      <CategoryGrid
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
        pressFood={handlePressFood}
      />
    ) : null;
  };

  return (
    <KeyboardAvoidingView>
      <SearchBar />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
