import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";

export default function FoodList({ items }) {
  const { text } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const renderFoodItem = (itemData) => {
    const foodItemsProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };

    const foodTitle = foodItemsProps.title.toLowerCase();
    const searchText = text.toLowerCase();

    return foodTitle.includes(searchText) ? (
      <FoodItem {...foodItemsProps} />
    ) : null;
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
