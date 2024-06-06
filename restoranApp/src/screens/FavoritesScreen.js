import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../store/FavouritesContext";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { clearText } from "../store/redux/searchSlice";

export default function FavoritesScreen({ navigation }) {

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      dispatch(clearText());
    }
  }, [isFocused]);
  
  const favoriteFoodIDS = useSelector((store) => store.favorites.ids);
  // const favoriteFoodContext = useContext(FavoritesContext);

  // const favoriteFoods = FOODS.filter((food) =>
  //   favoriteFoodContext.ids.includes(food.id)
  // );

  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodIDS.includes(food.id)
  );

  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Favorilere herhangi bir şey eklemediniz</Text>
        <Button
          title="Yemek Seç"
          onPress={() => navigation.navigate("Category")}
          style={styles.button}
          color="#FFD0D0"
        />
      </View>
    );
  }
  return <FoodList items={favoriteFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
