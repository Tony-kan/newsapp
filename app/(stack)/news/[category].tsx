import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  fetchBreakingNews,
  fetchDiscoverNews,
  fetchRecommendedNews,
} from "@/api/fetchnews";
import DisplayNews from "@/components/displayNews";

// displays all the news based on a particular category

const News = () => {
  const { category }: { category: string } = useLocalSearchParams();

  if (category === "Breaking") {
    const breakingNewsQuery = useQuery({
      queryKey: ["breaking-news"],
      queryFn: fetchBreakingNews,
    });
    return <DisplayNews news={breakingNewsQuery} category={category} />;
  } else if (category === "Recommended") {
    const recommendedNewsQuery = useQuery({
      queryKey: ["recommended-news"],
      queryFn: fetchRecommendedNews,
    });
    return <DisplayNews news={recommendedNewsQuery} category={category} />;
  } else {
    const discoverNewsQuery = useQuery({
      queryKey: ["discover-news", category],
      queryFn: () => fetchDiscoverNews(category),
    });
    return (
      <DisplayNews
        news={discoverNewsQuery}
        category={`Discover ${category[0].toUpperCase() + category.slice(1)}`}
      />
    );
  }
};

export default News;
