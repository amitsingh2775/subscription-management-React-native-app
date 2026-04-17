import { Text, View } from "react-native";
import {Link} from "expo-router";
import "@/global.css";
export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-background "
    >
      <Text className="text-lg font-bold text-success">Edit app/index.tsx to edit this screen.</Text>
     <Link href="/subscriptions/spotify"> Go to Subscriptions </Link>
     <Link href={{
       pathname:"/subscriptions/[id]",
       params:{id:"clude"}
     }}>clude</Link>

    </View>
  );
}
