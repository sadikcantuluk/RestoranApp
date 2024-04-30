import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./src/screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./src/screens/FoodOverviewScreen";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/favouritescontext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFC7C7",
        },
        contentStyle: {
          backgroundColor: "#FFE2E2",
        },
        headerTintColor: "#3C5B6F",
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "Kategoriler Sayfası",
          drawerIcon: () => <Ionicons name="list" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          title: "Favoriler",
          drawerIcon: () => (
            <Ionicons name="star-half-outline" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FFC7C7",
            },
            contentStyle: {
              backgroundColor: "#FFE2E2",
            },
            headerTintColor: "#3C5B6F",
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{
              title: "Yemek İçeriği",
            }}
          />
        </Stack.Navigator>
      </FavoritesContextProvider>
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
