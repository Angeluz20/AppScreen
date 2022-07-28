import React,{useRef, useState} from "react";
import { Image,Modal,StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SelectAvatar from "../SelectPhoto/SelectAvatar";

export default ({route, navigation}) => {
    const [modalVisible, setModalVisible]=useState(false);
function openModal(){
   
  setModalVisible(true);
}
   
    const {item} = route.params 
     
  
    return(
        <View style={styles.container}>
           <Image source={item.avatar} style={{width:100, height:100}}/>
           
           <TouchableOpacity 
           style={styles.btnAlterPhoto}
           onPress={(openModal)}
           >
                <Text style={styles.btnPhotoText}>ALTERAR FOTO</Text>
            </TouchableOpacity>
         <Modal visible={modalVisible}>
            <View>
            <TouchableOpacity 
               style={styles.styleBtn}
               onPress={()=> setModalVisible(false)}>
               <Text style={styles.txtBtn}>x</Text>
             
              </TouchableOpacity>
                
            
            </View>
            <SelectAvatar/>
         </Modal>
         
            <TextInput style={styles.input}>
               <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>{item.nome}</Text>
            </TextInput>
            <TextInput style={styles.input}>
               <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>{item.email}</Text>
            </TextInput>
            <TextInput style={styles.input}>
               <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>{item.genero}</Text>
            </TextInput>
            <TextInput style={styles.input}>
               <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>{item.dataNasc}</Text>
            </TextInput>
          
                <TouchableOpacity 
                style={styles.btnSave}
                onPress={() => navigation.navigate('ProfileScreee')}
                >
                    <Text style={styles.btnSaveText}>SALVAR</Text>
                </TouchableOpacity>
         

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        backgroundColor:'white',
        width:'80%',
        borderRadius:3,
        borderColor:'black',
        borderWidth:1,
        padding:10,
        margin:15
    },
    btnSave:{
        width:'80%',
        backgroundColor:'#304FFE',
        padding:17,
        margin:25,
        borderRadius:3,
        alignItems:'center'
    },
    btnSaveText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    btnAlterPhoto:{
        backgroundColor:'#bfddf3',
        width:'40%',
        padding:13,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        borderWidth:1,
        borderColor:'#b3c7d6',
        marginTop:50,
        marginBottom:50
    },
    btnPhotoText:{
        color:'#304FFE',
        fontSize:15,
        fontWeight:'bold'
    },
    styleBtn:{
      width: 40,
      height:40,
      borderRadius: 10,
      backgroundColor: '#C6CEFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:50,
      marginTop:10,
  
    }
})