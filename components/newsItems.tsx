import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
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
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

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
      onPress={() =>
        router.push(
          `/content/${item.title}?url=${encodeURIComponent(item.url)}`
        )
      }
      key={item.url}
      className="rounded-xl"
    >
      <View className="relative w-full rounded-xl">
        <Image
          source={{ uri: item.urlToImage || generateRandomImage() }}
          style={{
            width: width * 0.93,
            height: height * 0.25,
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
      onPress={() =>
        router.push(
          `/content/${item.title}?url=${encodeURIComponent(item.url)}`
        )
      }
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

// export const CategoriesItems = ({ item }: { item: Categories }) => {
//   return (
//     <Pressable onPress={() => router.push(`/news/${item?.id}`)}>
//       <View className="relative m-[7px]">
//         <Image
//           source={{ uri: item.image_url }}
//           style={{
//             width: width * 0.47,
//             height: width * 0.45,
//             borderRadius: 10,
//           }}
//           resizeMode="cover"
//           className="rounded-xl"
//         />
//         <LinearGradient
//           colors={["transparent", "rgba(0,0,0,0.9)"]}
//           start={{ x: 0.5, y: 0 }}
//           end={{ x: 0, y: 1 }}
//           style={{
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             height: "100%",
//             borderBottomLeftRadius: 20,
//             borderBottomRightRadius: 20,
//           }}
//         />
//         <View className="absolute bottom-0 left-4 right-0 justify-end h-[80%] px-4 pb-4">
//           <Text
//             className="text-xl text-white mb-2"
//             style={{ fontFamily: "Bold" }}
//           >
//             {item.name}
//           </Text>
//         </View>
//       </View>
//     </Pressable>
//   );
// };
export const CategoriesCard = ({
  categories,
  activeCategory,
  handleChangeCategory,
}: {
  categories: any[];
  activeCategory: string;
  handleChangeCategory: any;
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingRight: 20,
        }}
      >
        {categories.map((category, index) => {
          let isActive = category.title == activeCategory;
          let activeButtonClass = isActive
            ? "bg-[#a16207] "
            : "bg-black/10 dark:bg-neutral-400 ";
          let activeTextClass = isActive
            ? "text-white "
            : "text-gray-600 dark:text-neutral-600 ";

          return (
            <Pressable
              key={index}
              onPress={() => handleChangeCategory(category.title)}
              className="flex items-center space-y-1 mx-1"
            >
              <View className={"rounded-full py-2 px-4 " + activeButtonClass}>
                <Text
                  className={"capitalize " + activeTextClass}
                  style={{
                    fontSize: hp(1.6),
                  }}
                >
                  {category.title}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export const newsCard = ({ item }: { item: newsCardProps }) => {
  // console.log("Inside items card", JSON.stringify(item, null, 2));
  return (
    <Pressable
      className="px-4 w-full"
      onPress={() =>
        router.push(
          `/content/${item.title}?url=${encodeURIComponent(item.url)}`
        )
      }
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
