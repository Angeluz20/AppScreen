import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import Feather from "react-native-vector-icons/EvilIcons";
export default function TaskList({data}){
    return(
    <View style={styles.container}>
        <TouchableOpacity style={{marginLeft:10}}>
            <Feather name={'trash'} color={'white'} size={50}/>
        </TouchableOpacity>
       
        <View style={{paddingRight:10}}>
        <TouchableWithoutFeedback>
             <Text style={styles.nome}>
                 {data.key} {data.nome}
             </Text>
        </TouchableWithoutFeedback>
    </View>
    </View>
    
    )
   
}
const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'black',
    alignItems:'center',
    marginBottom:10,
    padding:10,
    borderRadius:4
    },
nome:{
    color:'white',
    fontSize:20,
    paddingRight:10
}
})