import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchBreakingNews, fetchRecommendedNews } from "@/api/fetchnews";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import Carousel from "react-native-snap-carousel";
import {
  RenderBreakingNewsItems,
  RenderRecommendedNewsItems,
} from "@/components/newsItems";
// import Carousel from "react-native-snap-carousel";
import Carousel from "react-native-reanimated-carousel";
import { router } from "expo-router";

// displays breaking and recommended news

const Home = () => {
  //fetch breaking news
  const breakingNewsQuery = useQuery({
    queryKey: ["breaking-news"],
    queryFn: fetchBreakingNews,
  });

  // fetch recommended news
  const recommendedNewsQuery = useQuery({
    queryKey: ["recommended-news"],
    queryFn: fetchRecommendedNews,
  });
  // console.log(
  //   "breaking news",
  //   JSON.stringify(breakingNewsQuery.data?.articles, null, 2)
  // );
  // console.log(
  //   "Recommnded news",
  //   JSON.stringify(recommendedNewsQuery.data?.articles, null, 2)
  // );

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-56"
      >
        <View className="flex flex-row mx-4 justify-between items-center my-4">
          <Text className=" text-2xl font-semibold">Breaking News</Text>
          <Pressable onPress={() => router.push("/news/Breaking")}>
            <Text className="text-blue-500 mx-4 text-xl font-bold">
              View All
            </Text>
          </Pressable>
        </View>
        <View className="flex mx-4 ">
          <Carousel
            data={breakingNewsQuery?.data?.articles}
            renderItem={({ item }) => <RenderBreakingNewsItems item={item} />}
            width={width}
            height={height / 2.8}
            autoPlay={true}
            autoPlayInterval={5000}
            pagingEnabled={true}
            scrollAnimationDuration={2000}
            // snapEnabled={true}
            windowSize={11}
            // key={breakingNewsQuery.data?.articles[0].url}
          />
        </View>
      </ScrollView>
      <View className="flex flex-row justify-between items-center mx-4 mb-4">
        <Text className="text-2xl font-semibold">Recommended News</Text>
        <Pressable onPress={() => router.push("/news/Recommended")}>
          <Text className="text-blue-500 mx-4 text-xl font-bold">View All</Text>
        </Pressable>
      </View>
      <FlatList
        data={recommendedNewsQuery.data?.articles}
        renderItem={({ item }) => <RenderRecommendedNewsItems item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.url}
        contentContainerClassName="pb-4 pt-2 "
        initialNumToRender={6}
      />
    </SafeAreaView>
  );
};

export default Home;
