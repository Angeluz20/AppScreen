import React,{useState} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    FlatList,
    SafeAreaView
} from "react-native";
import TaskList from '../taskList/ListTask'
let task = [
    {key:'1',nome:'comprar coca'},
    {key:'2',nome:'estudar JS'}
]
const Home =() =>{
    const [newTask,setNewTask] = useState('')
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.containerTask}>
            <TextInput
            style={styles.input}
            placeholder={'O que vai fazer hoje?'}
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            />
           
            <TouchableOpacity
            style={styles.btnSearch}
            >
                <Text style={styles.btnTxt}>Add</Text>

            </TouchableOpacity>
            
            
        </View>
       
        <FlatList
        data={task}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
            <TaskList data={item}/>
        )}
        />
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container:{
        
        paddingTop:25,
        paddingHorizontal:10,
        backgroundColor:'white'
    },
    containerTask:{
        padding:10,
       flexDirection:'row' 
    },
    input:{
        flex:1,
        marginBottom:10,
        padding:10,
        backgroundColor:'white',
        borderRadius:4,
        borderWidth:1,
        borderColor:'black',
        height:45
    },
    btnSearch:{
       backgroundColor:'#141414',
       height:45,
       alignItems:'center',
       justifyContent:'center',
       marginLeft:5,
       paddingHorizontal:14
    },
    btnTxt:{
        color:'white'
    }
})
export default Home;
//black