import React from "react";
import {View, Text, FlatList,StyleSheet} from 'react-native'
import RenderData from "./RenderData";
import { DATA } from "../DailyRecord/DataList";
import styleCard from "../../Components/styleCard";
export default function DailyStorie(){
    return(
        <View style={styleCard.container}>
             <FlatList
                 data={DATA}
                renderItem={({item}) => (
                 <RenderData data={item}/>
                 )}
                keyExtractor={(item) => item.id}
        
      />
        </View>
    )
}
const styles = StyleSheet.create({
   container:{

   }
})