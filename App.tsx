import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "src/navigation";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </TailwindProvider>
  );
}
