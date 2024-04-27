import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGrid({id,title,color}) {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{color}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})