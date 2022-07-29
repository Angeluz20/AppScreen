import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styleCard from "../../Components/styleCard";
import TrashIcon from '../../../../node_modules/react-native-vector-icons/EvilIcons'
export default function RenderData({data,deleteItem,editItem}){
    
    return(
        <TouchableOpacity onPress={() => editItem(data)}>
        <View style={styleCard.container}>
             
             <View style={styleCard.containerCard}>
                <Image source={data.img} style={{width:57, height:57}}/>
                <Text>{data.title}</Text>
             <View style={styleCard.txtArea}>
           <View style={{justifyContent:'center', flexDirection:'row'}}>
              <Text numberOfLines={1} style={{ width: 120, color: '#ACACAC', marginLeft: 20 }}>
                  {data.text}
              </Text>
               <TouchableOpacity
               onPress={() => deleteItem(data.id)}
               >
                     <TrashIcon name='trash' color={'grey'} size={40}/>
               </TouchableOpacity>
            </View>
            </View>
            </View> 
           
        </View>
        </TouchableOpacity>
    )
}