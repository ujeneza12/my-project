import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import PageScreen from "./screens/PageScreen";
import ComponentsScreen from "./screens/ComponentsScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ViewAllScreen from "./screens/ViewAllScreen";
import GameScreen from "./screens/GameScreen";
import FurniteScreen from "./screens/FurniteScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home"  component={HomeScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Menu"  component={MenuScreen} />
        <Stack.Screen name="Page"  component={PageScreen} />
        <Stack.Screen name="Components"  component={ComponentsScreen}   />
        <Stack.Screen name="Notification"  component={NotificationScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="View"  component={ViewAllScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="Game"  component={GameScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="Furniture"  component={FurniteScreen}  options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
