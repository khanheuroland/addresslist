import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Person from '../components/person'
import { AppContext } from "../App";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

const personData = require("../assets/data/persons.json")

const ListPerson = ({navigation}) => {
  const {persons, setPersons} = useContext(AppContext);
  useEffect(()=>{
    navigation.setOptions({
      title: 'New Home',
      headerTintColor: 'yellow',
      headerStyle: {
        backgroundColor: 'green',
      }
    })
    setPersons(personData);
  },[]);

  return (
    <View style={styles.container}>
      <FlatList
        data={persons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person navigation={navigation} person={item} />}
      />
    </View>
  );
};

export default ListPerson;
