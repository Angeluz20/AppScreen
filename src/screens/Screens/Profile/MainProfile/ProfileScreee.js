import React, { useState } from "react";
import { Text, View,FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

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

    const Item = ({item, onPress, backgroundColor, textColor})=>{
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
                    style={styles.exit}
                    >
                         <Text style={styles.txtBtnExit}>SAIR</Text>
                    </TouchableOpacity>
                  

                </View>
            </View>
            
        )
    }

export default ({navigation}) => {
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
    }
})