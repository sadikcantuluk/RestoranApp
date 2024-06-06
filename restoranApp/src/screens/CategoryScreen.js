import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { clearText } from "../store/redux/searchSlice";
import { useIsFocused } from "@react-navigation/native";

export default function CategoryScreen({ navigation }) {
  const { text } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      dispatch(clearText());
    }
  }, [isFocused]);

  const renderCategoryItem = (itemData) => {
    const handlePressFood = () => {
      navigation.navigate("FoodOverview", { categoryId: itemData.item.id });
    };

    const categoryTitle = itemData.item.title.toLowerCase();
    const searchText = text.toLowerCase();

    return categoryTitle.includes(searchText) ? (
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
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        ListHeaderComponent={<SearchBar />}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
