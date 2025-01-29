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
  console.log(
    "breaking news",
    JSON.stringify(breakingNewsQuery.data?.articles, null, 2)
  );
  console.log(
    "Recommnded news",
    JSON.stringify(recommendedNewsQuery.data?.articles, null, 2)
  );

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView className="flex-1 h-full">
      <ScrollView>
        <View className="flex flex-row mx-4 justify-between items-center my-6">
          <Text className=" text-2xl font-semibold">Breaking News</Text>
          <Pressable>
            <Text className="text-blue-500 mx-4 text-xl font-bold">
              View All
            </Text>
          </Pressable>
        </View>
        <View className="flex mx-4 my-2">
          <Carousel
            data={breakingNewsQuery?.data?.articles}
            renderItem={({ item }) => <RenderBreakingNewsItems item={item} />}
            width={width}
            height={height / 2.5}
            autoPlay={true}
            pagingEnabled={true}
            scrollAnimationDuration={1000}
          />
        </View>
      </ScrollView>
      <View className="flex flex-row justify-between items-center mt-4 mb-4">
        <Text className=" text-2xl font-semibold">Recommended News</Text>
        <Pressable>
          <Text className="text-blue-500 mx-4 text-xl font-bold">View All</Text>
        </Pressable>
      </View>
      <FlatList
        data={recommendedNewsQuery.data?.articles}
        renderItem={({ item }) => <RenderRecommendedNewsItems item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.url}
        contentContainerClassName="pb-20 "
        // columnWrapperClassName="flex gap-5 px-5"
        initialNumToRender={5}
      />
      {/* <View>
        {breakingNewsQuery.data && (
         
        )}
      </View> */}
      {/* <View>
        {recommendedNewsQuery.data && (
          <FlatList
            data={recommendedNewsQuery.data.articles}
            renderItem={({ item }) => <RenderBreakingNewsItems item={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.url}
          />
        )}
      </View> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
