import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";
import SearchBar from "./SearchBar";

export default function FoodList({ items }) {
  const renderFoodItem = (itemData) => {
    const foodItemsProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };
    return <FoodItem {...foodItemsProps} />;
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
        ListHeaderComponent={<SearchBar />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
