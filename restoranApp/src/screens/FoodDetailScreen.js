import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContext } from "../store/FavouritesContext.js";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoriteSlice.js";

export default function FoodDetailScreen({ route, navigation }) {
  const favoriteFoodIDS = useSelector((store) => store.favorites.ids);
  // const favoriteFoodContext = useContext(FavoritesContext);

  const dispatch = useDispatch();

  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);

  // const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

  const foodIsFavorite = favoriteFoodIDS.includes(foodId);

  const handlePressStar = () => {
    console.log("Favorilere eklendi");
  };

  const changeFavorite = () => {
    if (foodIsFavorite) {
      dispatch(removeFavorite({ id: foodId }));
      // favoriteFoodContext.removeFavorite(foodId);
    } else {
      dispatch(addFavorite({ id: foodId }));
      // favoriteFoodContext.addFavorite(foodId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            style={({ pressed }) => (pressed ? styles.pressed : null)}
            onPress={handlePressStar}
          >
            <Ionicons
              name={foodIsFavorite ? "star" : "star-outline"}
              size={36}
              color="black"
              onPress={changeFavorite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <View style={styles.complexityContainer}>
          <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        </View>
        <View style={styles.affordabilityContainer}>
          <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
        </View>
      </View>
      <View>
        <View style={styles.innerContainer}>
          <Text style={styles.innerContainerText}>İçindekiler</Text>
        </View>
        <FoodIngredients ingredientsData={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  image: {
    width: "98%",
    height: 270,
    borderRadius: 20,
    marginLeft: 4,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 4,
  },
  complexityContainer: {
    backgroundColor: "#45FFCA",
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 4,
  },
  affordabilityContainer: {
    backgroundColor: "yellow",
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 5,
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  innerContainer: {
    marginVertical: 5,
  },
  innerContainerText: {
    textAlign: "center",
    marginBottom: 3,
    borderBottomWidth: 2,
    color: "blue",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
