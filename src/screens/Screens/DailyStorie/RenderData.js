import React from "react";import {View, Text, Image, TouchableOpacity} from 'react-native'
import styleCard from "../../Components/styleCard";
import Feather from '../../../../node_modules/react-native-vector-icons/Feather'
export default function RenderData({data}){
    return(
        <View style={styleCard.container}>
             
             <View style={styleCard.containerCard}>
                <Image source={data.img} style={{width:57, height:57}}/>
             <View style={styleCard.txtArea}>
           
            <Text numberOfLines={1} style={{ width: 120, color: '#ACACAC', marginLeft: 20 }}>
                {data.title}
            </Text>
              
            </View> 
            <TouchableOpacity>
                <Feather name='trash' color={'grey'} size={30}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}