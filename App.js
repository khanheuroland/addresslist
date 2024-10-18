import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Person from './components/person'

const personData = require("./assets/data/persons.json")

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
          data={personData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Person person={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
