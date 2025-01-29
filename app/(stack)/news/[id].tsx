import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

// displays all the news based on a particular category

const News = () => {
  const { id } = useLocalSearchParams();
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
          title: `News About :  ${id}`,
        }}
      />
      <Text>News category id : {id}</Text>
    </View>
  );
};

export default News;
