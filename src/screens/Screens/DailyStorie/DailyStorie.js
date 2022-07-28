import React,{useState} from "react";
import {View, TextInput, FlatList,StyleSheet,TouchableOpacity,Text} from 'react-native'
import RenderData from "./RenderData";
import { DATA } from "../DailyRecord/DataList";
import styleCard from "../../Components/styleCard";
import { Database } from "firebase/database";

export default function DailyStorie(){
    const [newTask, setNewTask] = useState('')
    const [dailyStorie, setDailyStore] = useState([]);

    // function addStorieCards(){
    //     if(newTask === ''){
    //         return;
    //     }
    //     let Storie = Database.ref('storie').child(user)
    // }
    function deleteCard(id){
        console.log(`item ${id}`)

    }
    function itemSeleceted(data){
        console.log('item clicado',data)
    }
    return(
     

       
        <View style={styleCard.container}>
             <View>
             <TextInput
                    value={newTask}
                    onChangeText={(text) => setNewTask(text)}
                    placeholder="Escreva aqui o que aconteceu hoje... ">
                
                 </TextInput>
                 <TouchableOpacity
                //  onPress={addStorieCards}
                  style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30, justifyContent:'center'}}>+</Text>
                 </TouchableOpacity>
             </View>
             <FlatList
                 data={DATA}
                 renderItem={({item}) => (
                 <RenderData data={item} deleteItem={deleteCard} editItem={itemSeleceted}/>
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