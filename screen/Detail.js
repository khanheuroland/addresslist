import React, { useEffect } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Detail = ({ navigation, route }) => {
  const { data, removePerson } = route.params;

  useEffect(() => {
    console.log(data);

    navigation.setOptions({
      title: `${data.first_name} ${data.last_name}`,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            removePerson(data.id);
            navigation.goBack();
          }}
          style={{ paddingRight: 15 }}
        >
          <Text style={{ color: "red", fontSize: 17 }}>Delete</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: data.avatar }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>First Name: {data.first_name}</Text>
      <Text>Last Name: {data.last_name}</Text>
      <Text>Email:</Text>
      <TextInput value={data.email}></TextInput>

      {/* <Button
        color="red"
        title="Delete"
        onPress={() => {
          removePerson(data.id);
          navigation.goBack();
        }}
      /> */}
    </View>
  );
};

export default Detail;
