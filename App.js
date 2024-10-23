import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ListPerson from './screen/ListPerson';
import Detail from './screen/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={ListPerson} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


