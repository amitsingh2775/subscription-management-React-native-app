import { Text, View } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView=styled(RNSafeAreaView)

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 bg-background p-5 "
    >
      <Text className=" font-bold text-success font-sans-extrabold text-5xl">Home</Text>
      <Text className="text-success font-sans-light">Home</Text>

    </SafeAreaView>
  );
}
