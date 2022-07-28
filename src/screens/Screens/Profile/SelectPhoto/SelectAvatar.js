import React,{Component} from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const numColumns = 3
export default ({navigation}) => {
    
           const  DATA= [
                {
                 id:'1',
                 img: require('../../../assets/humores/happy.png'),
                 nome:'happy'
                },
                {
                 id:'2',
                 img: require('../../../assets/humores/sad.png'),
                 nome:'sad'
                },
                {
                 id:'3',
                 img: require('../../../assets/humores/ok.png'),
                 nome:'ok'
                },
                {
                  id:'4',
                  img: require('../../../assets/humores/radiant.png'),
                   nome:'radiant'
                },
                {
                  id:'5',
                  img: require('../../../assets/humores/terrible.png'),
                   nome:'terrible'
                },
                {
                  id:'6',
                  img: require('../../../assets/humores/terrible.png'),
                   nome:'terrible'
                }
            ]
         
        
            
   
        return(
        <View style={styles.conatainer}>
            <View style={styles.modal}>
            <View style={styles.title}>
            <Text style={styles.txtTitle}>Selecione a foto de perfil</Text>
            </View>

              <FlatList
               data={DATA}
               keyExtractor={(item) => String(item.id)}  
               numColumns={numColumns}
               renderItem={({item})=> <View style={{
                height:120,
                width:135,
               }}>
                
               <View style={styles.containerHumor}>
               
                <TouchableOpacity>
                    <View style={styles.selectHumorColor}>
                         <Image source={item.img} style={{width:92, height:92}}/>
                     </View> 
               </TouchableOpacity> 
             
                </View>
               </View>}
           
              />
                <TouchableOpacity 
                 onPress={() => navigation.navigate('ProfileEdition')}
                style={styles.btnSave}
                >
                    <Text style={styles.btnSaveText}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   conatainer:{
    flex:1,
    padding:30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
   },
   modal:{
    flex:1,
    width:'100%',
    alignItems:'center'
   },
   containerHumor:{
    flex:1,
    width:'90%',
    height:80,
    justifyContent:'center',
    alignItems:'center',
    padding:10
   },
   title:{
    width:'90%',
    alignItems:'center',
    marginTop:100,
    marginBottom:29
   },
   txtTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
   },
   nome:{
    color:'black'
   }
   ,
   btnSave:{
       width:'80%',
       backgroundColor:'#304FFE',
       padding:17,
       margin:25,
       borderRadius:3,
       alignItems:'center',
      
   },
   btnSaveText:{
       color:'white',
       fontSize:15,
       fontWeight:'bold'
   }
})