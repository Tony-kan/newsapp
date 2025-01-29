import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// allows users to read news based on category
const Discover = () => {
  return (
    <SafeAreaView>
      <Text>Discover</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Discover;
