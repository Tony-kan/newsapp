import { View, Text, TextInput, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { fetchSearchNews } from "@/api/fetchnews";
import { FontAwesome5 } from "@expo/vector-icons";
// import { FlatList } from "react-native-gesture-handler";
import { newsCard } from "@/components/newsItems";
import { useDebouncedCallback } from "use-debounce";
import { Stack } from "expo-router";

// enable users to search for news

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = useCallback((text: string) => {
    setQuery(text);
    // debouncedSearch(text);

    if (text.length > 2) {
      fetchSearchNews(text).then((res) => {
        setResults(res.articles);
        setResultsCount(res.totalResults);
      });
    }
  }, []);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => setQuery(text),
    500
  );
  return (
    <SafeAreaView>
      <View className="px-4">
        <Text className="text-3xl text-stone-500 mb-3 font-bold">Search</Text>
        <View className="flex flex-row justify-items-center items-center">
          <FontAwesome5 name="search" size={24} color="gray" className="mr-2" />
          <TextInput
            className={
              isFocused
                ? `flex-1 rounded-xl px-4 py-4 font-medium border-2 border-stone-500`
                : `flex-1 rounded-xl px-4 py-4 font-medium border-none onFocus:border-2`
            }
            placeholder="Search for news"
            value={query}
            onChangeText={(text) => handleTextChange(text)}
            keyboardType="default"
            autoFocus
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            clearButtonMode="while-editing"
          />
        </View>
        <Text className="text-lg mt-4 mb-4 font-semibold">
          Total Results : {resultsCount}
        </Text>
        <View>
          {results && (
            <FlatList
              data={results}
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

export default Search;
