import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeText } from "../store/redux/searchSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        placeholderTextColor="#50727B"
        onChangeText={(text) => dispatch(changeText({ text: text }))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#474F7A",
    marginVertical: 8,
    marginHorizontal: 5,
  },
  input: {},
});
