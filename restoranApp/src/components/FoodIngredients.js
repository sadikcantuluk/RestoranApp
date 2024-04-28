import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodIngredients({ ingredientsData }) {

  return ingredientsData.map((foodIng) => (
    <View key={foodIng} style={styles.container}>
      <Text style={styles.text}>{foodIng}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        marginVertical:8,
        paddingVertical:4,
        marginHorizontal:5,
        borderRadius:8
    },
    text:{
        fontSize:15,
        fontWeight:'bold'
    }
});
