import React,{useState} from "react"
import { View, TextInput, TouchableOpacity, Text } from "react-native"

export default function InputMsg(){
    const [newTask, setNewTask] = useState('')
    return(
        <View>
               <TextInput
                    value={newTask}
                    onChangeText={(text) => setNewTask(text)}
                    placeholder="Escreva aqui o que aconteceu hoje... ">
                
                 </TextInput>
                 <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30, justifyContent:'center'}}>+</Text>
                 </TouchableOpacity>
        </View>
    )
}

