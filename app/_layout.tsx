import { Stack } from "expo-router";
import "./global.css";
import React from "react";
import QueryProvider from "@/providers/QueryProvider";

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(stack)" />
      </Stack>
    </QueryProvider>
  );
}
