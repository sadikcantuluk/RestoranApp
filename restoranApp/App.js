import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./src/screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./src/screens/FoodOverviewScreen";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            title: "Kategoriler Sayfası",
          }}
        />
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen}/>
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
