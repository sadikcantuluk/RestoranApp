import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodList from "../components/FoodList";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { clearText } from "../store/redux/searchSlice";
import { useIsFocused } from "@react-navigation/native";

export default function FoodOverviewScreen({ route, navigation }) {
  const { text } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  const categoryId = route.params.categoryId;

  const displayedFoods = FOODS.filter((foodItem) => {
    return (
      foodItem.categoryIds.indexOf(categoryId) >= 0
      // && foodItem.title.indexOf(text) >= 0
    );
  });

  useEffect(() => {
    if (!isFocused) {
      dispatch(clearText());
    }
  }, [isFocused]);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <KeyboardAvoidingView>
      <FoodList items={displayedFoods} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
