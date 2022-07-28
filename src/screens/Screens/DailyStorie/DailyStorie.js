import React,{useState} from "react";
import {View, TextInput, FlatList,StyleSheet} from 'react-native'
import RenderData from "./RenderData";
import { DATA } from "../DailyRecord/DataList";
import styleCard from "../../Components/styleCard";
export default function DailyStorie(){
    const [newTask, setNewTask] = useState('')
    function deleteCard(id){
        console.log(`item ${id}`)

    }
    function itemSeleceted(data){
        console.log('item clicado',data)
    }
    return(
        <View style={styleCard.container}>
             <FlatList
                 data={DATA}
                 renderItem={({item}) => (
                 <RenderData data={item} deleteItem={deleteCard} editItem={itemSeleceted}/>
                 )}
                keyExtractor={(item) => item.id}
        
      />
              <TextInput
                    value={newTask}
                    onChangeText={(text) => setNewTask(text)}
                    placeholder="Escreva aqui o que aconteceu hoje... ">
                
                 </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
   container:{

   }
})