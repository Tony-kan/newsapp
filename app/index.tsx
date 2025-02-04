import { ImageBackground, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [onboarded, setOnboarded] = useState(false);
  // console.log("onboarded before", onboarded);

  useEffect(() => {
    /**
     * Checks if the user has been onboarded. If not, sets onboarded state to false.
     * Otherwise, sets onboarded state to true.
     */
    const checkOnboarded = async () => {
      const onboarded = await AsyncStorage.getItem("onboarded");
      // console.log("onboarded after", onboarded);
      if (!onboarded) {
        setOnboarded(false);
      }
      if (onboarded === "true") {
        setOnboarded(true);
      }
    };
    checkOnboarded();
  }, []);

  /**
   * Sets the onboarded value to true in AsyncStorage and updates the onboarded state.
   * This is used to determine if the user has been onboarded.
   */
  async function handleOnboard() {
    await AsyncStorage.setItem("onboarded", "true");
    setOnboarded(true);
  }

  if (onboarded) {
    return <Redirect href="/home" />;
  }

  return (
    <ImageBackground
      source={require("../assets/images/news_bg.jpg")}
      className="flex-1 items-center justify-center pb-10 bg-gradient-to-bl from-gray-200 to-gray-900"
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View className="absolute bottom-44 flex flex-col items-center justify-center w-full bg-gradient-to-t from-gray-900 px-4">
        <Text className="text-3xl text-white font-bold text-center mb-4">
          Breaking Boundaries, Breaking News
        </Text>
        <Text className="text-xl text-gray-300  font-normal text-center mb-6">
          Explore the world through our lens.
        </Text>

        <Pressable
          onPress={() => {
            router.push("/home");
            handleOnboard();
          }}
          className="bg-stone-500 text-2xl rounded-lg p-4 w-full items-center justify-center shadow-lg mt-4"
        >
          <Text className="text-white text-2xl font-medium">Get Started</Text>
        </Pressable>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}
