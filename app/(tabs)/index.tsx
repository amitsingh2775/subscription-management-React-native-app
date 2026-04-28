import { Text, View ,Image, FlatList} from "react-native";
import {useState} from "react";
import {formatCurrency} from "@/lib/utils";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/image";
import { HOME_BALANCE, HOME_USER, UPCOMING_SUBSCRIPTIONS,HOME_SUBSCRIPTIONS } from "@/constants/data";
import {icons} from "@/constants/icons";
import { styled } from "nativewind";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpcommingSubscriptionCards from "@/components/Upcomming";
import SubscriptionCard from "@/components/SubscriptionCard";
const SafeAreaView=styled(RNSafeAreaView)

export default function Index() {

   const [expandedSubId, setExpandedSubId] = useState<string | null>(null);
  return (
    <SafeAreaView
      className="flex-1 bg-background p-5 "
    >
 
    
    
        <FlatList
         ListHeaderComponent={()=><> 
              {/* Home Header */}
   <View className="home-header">
    <View className="home-user">
   <Image source={images.avatar} className="home-avatar"/>
   <Text className="home-user-name">{HOME_USER.name}</Text>
    </View>
     <Image source={icons.add} className="home-add-icon"/>

   </View>

    {/* Balance Card */}
   <View className="home-balance-card">
     <Text className="home-balance-label">Balance</Text>
     <View className="home-balance-row">
      <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
      <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}</Text>
     </View>
   </View>

    {/* Upcomming Subscription Cards */}
    <View className="mb-5">
       <ListHeading title="Upcoming "/>
       <FlatList
       data={UPCOMING_SUBSCRIPTIONS}
       renderItem={({item})=>(
        <UpcommingSubscriptionCards {...item}/>
       )}
       keyExtractor={(item)=>item.id}
       horizontal
       showsHorizontalScrollIndicator={false}
       ListEmptyComponent={
        <Text className="home-empty-state">No Upcoming Subscriptions Renewal yet.</Text>
       }
       />
    </View>
        <ListHeading title="All Subscriptions"/>
          </>}
         data={HOME_SUBSCRIPTIONS}
         keyExtractor={(item)=>item.id}

         renderItem={({item})=>(
          <SubscriptionCard 

          {...item}
         expanded={expandedSubId === item.id} // if same then true o/w false
         onPress={()=>setExpandedSubId(expandedSubId === item.id ? null : item.id)} // same same pe click karne pe collapse ho jaye, different pe click karne pe wo expand ho jaye
        />
         )}

          extraData={expandedSubId} // to re-render the list when expandedSubId changes
          ItemSeparatorComponent={()=><View className="h-3"/>}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No subscriptions yet.</Text>
          }
          contentContainerClassName="pb-17"
                  />
 

    </SafeAreaView>
  );
}
