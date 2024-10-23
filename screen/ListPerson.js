import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Person from '../components/person'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

const personData = require("../assets/data/persons.json")

const ListPerson = ({navigation}) => {
  const [data, setData] = useState(personData);
  const removePerson =(id)=>{
    let newList = data.filter(p=>p.id!=id);
    setData(newList);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person removePerson = {removePerson} navigation={navigation} person={item} />}
      />
    </View>
  );
};

export default ListPerson;
