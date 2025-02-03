import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { newsCard } from "./newsItems";

const DisplayNews = ({ news, category }: { category: string; news: any }) => {
  console.log("news", JSON.stringify(news, null, 2));
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <FontAwesome5
                  name="arrow-left"
                  size={24}
                  color={pressed ? "#a16207" : "#00f"}
                />
              )}
            </Pressable>
          ),
          title: `${category} News`,
        }}
      />
      {/* <Text>News category : {category}</Text> */}
      <FlatList
        data={news.data?.articles}
        renderItem={newsCard}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

export default DisplayNews;
