import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

// displays content of a particular news

const NewsContent = () => {
  const { title } = useLocalSearchParams();
  return (
    <View>
      <Stack screenOptions={{ title: `News Details for  ${title}` }} />
      <Text>NewsContent</Text>
      <Text>Title : {title}</Text>
    </View>
  );
};

export default NewsContent;
