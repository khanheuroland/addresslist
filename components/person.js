import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
const Person = ({ person }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 15,
          paddingHorizontal: 15,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: person.avatar }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {person.first_name} {person.last_name}
            </Text>
            <Text>{person.email}</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={20}></Entypo>
      </View>
      <View
        style={{ backgroundColor: "#EEE", height: 1, marginLeft: 70 }}
      ></View>
    </>
  );
};

export default Person;
