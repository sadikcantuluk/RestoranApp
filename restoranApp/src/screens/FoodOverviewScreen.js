import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data';
import FoodItem from '../components/FoodItem';

export default function FoodOverviewScreen({route}) {

    const categoryId = route.params.categoryId;

    const displayedFoods = FOODS.filter((foodItem)=>{
        return foodItem.categoryIds.indexOf(categoryId) >= 0;
    });

    const renderFoodItem = (itemData) => {
        const foodItemsProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
        }
        return(
            <FoodItem {...foodItemsProps}/>
        )
    }

  return (
    <View>
      <FlatList data={displayedFoods} keyExtractor={(item)=>item.id} renderItem={renderFoodItem}/>
    </View>
  )
}

const styles = StyleSheet.create({})