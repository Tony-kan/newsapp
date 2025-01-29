import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { convertToReadableDate, generateRandomImage } from "@/utils";
// import { Link } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const RenderBreakingNewsItems = ({ item }: any) => {
  return (
    <Link href="/[title]" asChild>
      {/* <Pressable onPress={() => router.push(`/[title]/${item.title}`)}> */}
      <Pressable>
        <View className="relative">
          <Image
            source={{ uri: item.urlToImage || generateRandomImage() }}
            style={{
              width: width * 0.8,
              height: height * 0.22,
              borderRadius: 10,
            }}
            resizeMode="cover"
            className="rounded-3xl"
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
            }}
          />

          <View className="absolute bottom-0 left-4 right-0 justify-end h-[80%] px-4 pb-4">
            <Text
              className="text-xl text-white mb-2"
              style={{ fontFamily: "Bold" }}
            >
              {item.title.length > 48
                ? item.title.slice(0, 47) + "..."
                : item.title}
            </Text>
            <Text className=" text-stone-200" style={{ fontFamily: "Medium" }}>
              {item.author}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export const RenderRecommendedNewsItems = ({ item }: any) => {
  return (
    <Link
      href={{
        pathname: "/[title]",
        params: {
          data: JSON.stringify([item.url, item.title]),
        },
      }}
      asChild
    >
      <Pressable className="px-4 w-full">
        <View className="flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl">
          <Image
            source={{ uri: item.urlToImage || generateRandomImage() }}
            style={{
              width: width * 0.4,
              height: width * 0.3,
              borderRadius: 5,
            }}
            resizeMode="cover"
            className="rounded-3xl mr-[1px]"
          />

          <View className="px-3 flex-1">
            <Text
              style={{ fontFamily: "Medium" }}
              className="text-stone-500 text-sm"
            >
              {item.author}
            </Text>
            <Text className="text-lg mb-[1px]" style={{ fontFamily: "Bold" }}>
              {item.title.length > 48
                ? item.title.slice(0, 47) + "..."
                : item.title}
            </Text>
            <Text
              style={{ fontFamily: "Medium" }}
              className="text-stone-500 text-sm"
            >
              {convertToReadableDate(item.publishedAt)}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
