import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// enable users to search for news

const Search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Search;
