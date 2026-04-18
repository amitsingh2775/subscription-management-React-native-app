import { Text, View } from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView=styled(RNSafeAreaView)

export default function Subscriptions() {
  return (
    <SafeAreaView
      className="flex-1  bg-background p-5"
    >
      <Text className="text-lg font-bold text-success">Subscriptions</Text>
    </SafeAreaView>
  );
}
