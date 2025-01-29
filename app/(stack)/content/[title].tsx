import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

// displays content of a particular news

const NewsContent = () => {
  const { title } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <FontAwesome5
                  name="arrow-left"
                  size={24}
                  color={pressed ? "#00f" : "#000"}
                />
              )}
            </Pressable>
          ),
          title: `News Details`,
        }}
      />
      <Text>NewsContent</Text>
      <Text>Title : {title}</Text>
    </View>
  );
};

export default NewsContent;
