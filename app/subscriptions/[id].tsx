import {View, Text} from "react-native";
import { useLocalSearchParams } from "expo-router";

const SubscriptionDetails=()=>{
    const id=useLocalSearchParams<{id:string}>()
    return (
        <View>
            <Text className="text-lg font-bold text-success">Subscription id, {id}</Text>
        </View>
    )
}
export default SubscriptionDetails;