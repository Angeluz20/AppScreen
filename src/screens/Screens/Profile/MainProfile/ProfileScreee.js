import { async } from "@firebase/util";
import React, { useState } from "react";
import { Text, View,FlatList, TouchableOpacity, Image, StyleSheet,Modal } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebaseConnection";

const DATA =[
    {
        id:'1',
        avatar:require('../../../assets/humores/ok.png'),
        nome: 'FULANO',
        genero:'MASCULINO',
        dataNasc: '15/12/2000',
        email: 'TESTE@GMAIL.COM'
    }
]   
    
    const Item = ({item, onPress,openModal})=>{
        const [modalVisible,setModalVisible] = useState(false)
        function openModal(){
            setModalVisible(true)
        }
       async function Deslogou(){ 
        await signOut(auth)
        .then(() => {
                
                console.log('Usuário deslogado! \n' )
               
                  
            })
                .catch(error => console.log(error));
         }
        
      
    //    async function signOut(){
    //         await  signOut(auth)
    //         .then(() => {
    //                 console.log('Usuário deslogado!' )
                    
    //             })
    //                 .catch(error => console.log(error));
    //     }
        return(
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image source={item.avatar} style={{width:100, height:100}}/>
                </View>
                <View style={styles.welcomeUser}>
                    <Text style={{ fontSize:25, color:'black'}}>OLÁ, {item.nome}</Text>
                </View>
                
                <View style={styles.informationUser}>
                    <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>E-MAIL:  {item.email} </Text>
                    <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>GÊNERO:  {item.genero}</Text>
                    <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>DATA DE NASCIMENTO: {item.dataNasc}</Text>
                </View>
                
                <View>
                    <TouchableOpacity
                    style={styles.editProfile}
                    onPress={onPress}
                    >
                         <Text style={styles.txtBtn}>EDITAR PERFIL</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                     onPress={() => openModal()}
                    style={styles.exit}
                    >
                         <Text style={styles.txtBtnExit}>SAIR</Text>
                    </TouchableOpacity>
                  
                  <Modal 
                  style={{justifyContent:'center',alignItems:'center', flex:1}}
                  animationType="slide"
                  visible={modalVisible}
                  transparent={true}>
                 
                  <View style={styles.styleModal}>
                  
                        <Text style={styles.txtWarning}>
                          Atenção!
                        </Text>
                         <Text style={styles.txtDescriptionModal}>
                            Deseja mesmo sair?
                         </Text>

                   <View style={styles.btnOption}>
                     <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.txtBtnModal}>CANCELAR</Text>
                    </TouchableOpacity>
                      
                       <TouchableOpacity
                       onPress={Deslogou}
                       >
                          <Text  style={styles.txtBtnModal}>
                            SIM
                         </Text>
                      </TouchableOpacity>
                   </View>
                   
                    </View>
                  </Modal >

                </View>
            </View>
            
        )
    }
      

export default function  ProfileScreen({navigation}){
    
  
           
   
    const [selectedId, setSelectedId] = useState(null)
    const renderItem = ({item}) => {
        return (<Item 
            item={item}
            onPress={() => {setSelectedId(item.id) 
                navigation.navigate('ProfileEdition',{item})}}
              
            />)
         
    }
     
    return(
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    editProfile:{
        width:380,
        height:55,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    txtBtn:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    exit:{
        width:380,
        height:55,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        marginTop:20
    },
    txtBtnExit:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    avatar:{
        marginTop:80
    },
    welcomeUser:{
        marginTop:60,
        marginBottom:20
    },
    informationUser:{
        width:'80%',
        marginTop:10,
        marginBottom:30
    },
    styleModal:{
        flex:1,
        elevation:16,
        marginHorizontal:90,
        marginVertical:390,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-start',
        borderRadius:20,
        padding:30
    },
    btnOption:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'50%',
        //alignItems:'flex-end'
        marginLeft:120,
        marginTop:50
    },
    txtBtnModal:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    txtWarning:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    txtDescriptionModal:{
        color:'#969696',
        fontSize:18,
        marginTop:10
    }

})