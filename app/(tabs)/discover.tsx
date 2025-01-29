import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { categories } from "@/utils";
import { CategoriesItems } from "@/components/newsItems";

// allows users to read news based on category
const Discover = () => {
  return (
    <SafeAreaView className="flex-1 rounded-2xl shadow-xl">
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoriesItems item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        // scrollEnabled={false}
        // contentContainerClassName="flex items-center justify-center"
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          gap: 10,
        }}
      />
    </SafeAreaView>
  );
};

export default Discover;
