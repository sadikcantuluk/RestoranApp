import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/FavouritesContext";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";

export default function FavoritesScreen({ navigation }) {
  const favoriteFoodContext = useContext(FavoritesContext);

  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodContext.ids.includes(food.id)
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
    marginBottom:10
  },
  
});
