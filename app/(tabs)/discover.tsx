import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import { categories } from "@/utils";
import {
  CategoriesCard,
  newsCard,
  //  CategoriesItems
} from "@/components/newsItems";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { fetchDiscoverNews } from "@/api/fetchnews";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { categories } from "@/constants";

// allows users to read news based on category
const Discover = () => {
  const [activeCategory, setActiveCategory] = useState("business");

  const [withoutRemoved, setWithoutRemoved] = useState([]);

  useEffect(() => {}, [activeCategory]);

  const { data: discoverNew, isLoading: isDiscoverLoading } = useQuery({
    queryKey: ["discoverNews", activeCategory],
    queryFn: () => fetchDiscoverNews(activeCategory),
  });

  // console.log("discover new", JSON.stringify(discoverNew?.articles, null, 2));

  const handleChangeCategory = (category: string) => {
    setActiveCategory(category);

    const filteredArticles = discoverNew?.articles.filter(
      (article: any) => article.title !== "[Removed]"
    );

    setWithoutRemoved(filteredArticles || []);
  };
  return (
    <SafeAreaView className="pt-8 ">
      <View>
        {/* Header */}
        <View className="px-4 mb-6 justify-between">
          <Text className="text-3xl  mb-2 font-bold">Discover</Text>

          <Text
            className="text-base text-gray-600 dark:text-neutral-300 "
            style={{
              fontFamily: "SpaceGroteskMedium",
            }}
          >
            News from all over the world
          </Text>
        </View>

        {/* Search */}
        <View className="mx-4 mb-8 flex-row p-2 py-3 justify-between items-center bg-neutral-100 rounded-full">
          <Pressable className="pl-2">
            <MagnifyingGlassIcon size="25" color="gray" />
          </Pressable>
          <TextInput
            onPressIn={() => router.push("/search")}
            placeholder="Search for news"
            placeholderTextColor={"gray"}
            className="pl-4 flex-1 font-medium text-black tracking-wider"
          />
        </View>

        {/* Categories */}
        <View className="flex-row mx-4">
          <CategoriesCard
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>

        <View className="h-full">
          {/* Header Title */}
          <View className="my-4 mx-4 flex-row justify-between items-center">
            <Text className="text-xl font-semibold">Discover</Text>
            <Pressable
              onPress={() => router.push(`/news/${activeCategory}`)}
            >
              <Text className="text-base text-[#a16207] font-semibold">
                View all
              </Text>
            </Pressable>
          </View>

          {isDiscoverLoading ? (
            <View className="justify-center items-center">
              <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#a16207" />
              </View>
            </View>
          ) : (
            <FlatList
              data={discoverNew?.articles}
              renderItem={newsCard}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.url}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
