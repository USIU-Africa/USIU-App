import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

const NavTab = ({ active = false }) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(`px-2 py-2 rounded ${active ? "bg-white" : ""} px-5`)}
    >
      <Text style={tailwind("font-medium")}>Explore</Text>
    </View>
  );
};

const HomeScreen = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex-grow")}>
      <SafeAreaView style={tailwind("flex-grow")}>
        <ScrollView>
          <View style={tailwind("flex-row w-full justify-between py-3 px-5")}>
            <Ionicons name="search" size={20} />
            <View style={tailwind("flex-row bg-gray-200 px-1 py-1 rounded")}>
              <NavTab active={true} />
              <NavTab />
            </View>
            <Ionicons name="funnel-outline" size={20} />
          </View>
          <View style={tailwind("mt-5")}>
            <View style={tailwind("w-full px-5")}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                }}
                style={tailwind("w-full h-32 rounded-md")}
              />
              <Text style={tailwind("pt-4 font-bold")}>Freshers Bash</Text>
              <Text style={tailwind("pt-2 text-gray-500 font-medium")}>
                Join freshmen as they finish up with their orientation and start
                their campus life at USIU
              </Text>
            </View>
            <View style={tailwind("mt-6")}>
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                numColumns={2}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <View style={tailwind("w-1/2 px-4 mb-5")}>
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                      }}
                      style={tailwind("w-full h-32 rounded-md")}
                    />
                    <Text style={tailwind("pt-3 font-bold")}>
                      Freshers Bash
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
