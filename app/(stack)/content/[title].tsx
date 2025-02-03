import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import WebView, { WebViewProps } from "react-native-webview";
import { useURL } from "expo-linking";
import Constants from "expo-constants";

// displays content of a particular news

const NewsContent = () => {
  const { title, url } = useLocalSearchParams();
  const [visible, setVisible] = useState(false);
  const pageUrl = url.toString();
  // console.log("pageUrl", pageUrl);
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
          title: `News Details`,
          headerTitleAlign: "center",
        }}
      />
      <WebView
        source={{ uri: pageUrl }}
        originWhitelist={["*"]}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
      />

      {visible && (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default NewsContent;
