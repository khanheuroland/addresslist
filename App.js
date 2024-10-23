import { createContext, useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListPerson from "./screen/ListPerson";
import Detail from "./screen/Detail";

//B1: Create app context will be used for all screen and component
export const AppContext = createContext();

const Stack = createStackNavigator();

export default function App() {
  //Define global state
  const [persons, setPersons] = useState([]);
  return (
    //B2: Create provider include global state
    <AppContext.Provider value={{persons, setPersons}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ListPerson} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
