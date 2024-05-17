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
        onChangeText={(text) => dispatch(changeText({ text: text }))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    borderColor: "#DDDDDD",
    marginVertical: 8,
    marginHorizontal: 5,
  },
  input: {},
});
