import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  Categories,
  convertToReadableDate,
  generateRandomImage,
} from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
// import { Link } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface newsCardProps {
  title: string;
  url: string;
  image?: string;
  publishedAt?: string;
  author?: string;
  urlToImage?: string;
}
export const RenderBreakingNewsItems = ({ item }: any) => {
  return (
    <Pressable
      onPress={() => router.push(`/content/${item.title}`)}
      key={item.url}
    >
      <View className="relative w-full">
        <Image
          source={{ uri: item.urlToImage || generateRandomImage() }}
          style={{
            width: width * 0.93,
            height: height * 0.25,
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

        <View className="flex absolute bottom-6 left-4 right-4">
          <Text
            // lineBreakMode="tail"
            className="text-xl text-white mb-2 font-bold text-wrap mx-2"
          >
            {item.title.length > 48
              ? item.title.slice(0, 46) + "..."
              : item.title}
          </Text>
          <Text className=" text-stone-200" style={{ fontFamily: "Medium" }}>
            {item.author}
          </Text>
        </View>
      </View>
    </Pressable>
    // </Link>
  );
};

export const RenderRecommendedNewsItems = ({ item }: any) => {
  return (
    <Pressable
      className="px-4 w-full"
      onPress={() => router.push(`/content/${item.title}`)}
      key={item.url}
    >
      <View className="flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl">
        <Image
          source={{ uri: item.urlToImage || generateRandomImage() }}
          style={{
            width: width * 0.4,
            height: width * 0.3,
            borderRadius: 5,
          }}
          resizeMode="cover"
          className="rounded-xl mr-[1px]"
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
    // </Link>
  );
};

export const CategoriesItems = ({ item }: { item: Categories }) => {
  return (
    <Pressable onPress={() => router.push(`/news/${item?.id}`)}>
      <View className="relative m-[7px]">
        <Image
          source={{ uri: item.image_url }}
          style={{
            width: width * 0.47,
            height: width * 0.45,
            borderRadius: 10,
          }}
          resizeMode="cover"
          className="rounded-xl"
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
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <View className="absolute bottom-0 left-4 right-0 justify-end h-[80%] px-4 pb-4">
          <Text
            className="text-xl text-white mb-2"
            style={{ fontFamily: "Bold" }}
          >
            {item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export const newsCard = ({ item }: { item: newsCardProps }) => {
  return (
    <Pressable
      className="px-4 w-full"
      onPress={() => router.push(`/content/${item.title}`)}
      key={item.url}
    >
      <View className="flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl">
        <Image
          source={{ uri: item.urlToImage || generateRandomImage() }}
          style={{
            width: width * 0.4,
            height: width * 0.3,
            borderRadius: 5,
          }}
          resizeMode="cover"
          className="rounded-xl mr-[1px]"
        />

        <View className="px-3 flex-1">
          <Text className="text-stone-500 text-sm font-medium">
            {item.author}
          </Text>
          <Text className="text-lg mb-[1px]" style={{ fontFamily: "Bold" }}>
            {item?.title?.length > 48
              ? item?.title?.slice(0, 47) + "..."
              : item?.title}
          </Text>
          <Text className="text-stone-500 text-sm font-medium">
            {convertToReadableDate(item.publishedAt)}
          </Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={26} color="brown" />
      </View>
    </Pressable>
  );
};
