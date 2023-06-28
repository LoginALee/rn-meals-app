import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categories."
      screenOptions={{
        headerStyle: { backgroundColor: Colors.Blue },
        headerTintColor: Colors.Yellow,
      }}
    >
      <Stack.Screen
        name="Categories."
        component={MyDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.Blue },
        headerTintColor: Colors.Yellow,
        drawerActiveBackgroundColor: Colors.Cerise,
        drawerActiveTintColor: Colors.Beige,
        drawerContentStyle: { backgroundColor: Colors.Beige },
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color={Colors.Blue}
            />
          ),
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        options={{
          drawerIcon: () => (
            <FontAwesome name="star" size={24} color={Colors.Blue} />
          ),
        }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
