import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity, Image } from "react-native";

const numColumns = 3


const Item = ({ item, onPress, backgroundColor,}) => (
      
      <View style={styles.containerItem}>
      
  <TouchableOpacity onPress={onPress} style={[styles.styleBorderItem,backgroundColor]}>
   <View style={{
                        height:90,
                        width:90,
                        justifyContent:'center',
                        alignItems:'center',
                        

                       }}>
            <View style={styles.areaImg}>
               <Image source={item.img} style={styles.img} />
            </View>
     
   </View>
  
  </TouchableOpacity> 
    
    <View>
    <Text style={styles.title}>{item.nome}</Text>
   </View>

  </View>

);

const App = ({navigation}) => {
  
    
    const [DATA, setDATA] = useState([
        {
                       
            id:'1', 
            img:require('../../../assets/atividades/cooking.png'), 
            imgwhite:require('../../../assets/ativiadesBranco/cooking_white.png'),
            nome:'Cozinhar',
            
            
        },
       {
    
            id:'2', 
            img:require('../../../assets/atividades/date.png'), 
            imgwhite:require('../../../assets/ativiadesBranco/date_white.png'),
            nome:'Encontro'
        
        },
        {
        
            id:'3', 
            img:require('../../../assets/atividades/games.png'), 
            imgwhite:require('../../../assets/ativiadesBranco/games_white.png'),
            nome:'Jogos'
        
        },
        {
        
            id:'4', 
            img:require('../../../assets/atividades/good_meal.png'), 
            imgwhite:require('../../../assets/ativiadesBranco/goodmeal_white.png'),
            nome:'Comer'
        
        },
        {
        
            id:'5', 
            img:require('../../../assets/atividades/movies.png'), 
            imgwhite:require('../../../assets/ativiadesBranco/movies_white.png'),
            nome:'Filmes e Séries'
        
        },
        {
        
            id:'6', 
            img:require('../../../assets/atividades/party.png'),
            imgwhite:require('../../../assets/ativiadesBranco/party_white.png'),
            nome:'Festa'
        
        },
        {
        
            id:'7', 
            img:require('../../../assets/atividades/rest.png'),
            imgwhite:require('../../../assets/ativiadesBranco/rest_white.png'),
            nome:'Dormir'
        
        },
        {
        
            id:'8', 
            img:require('../../../assets/atividades/shopping.png'),
            imgwhite:require('../../../assets/ativiadesBranco/shopping_white.png'),
            nome:'Shopping'
        
        },
        {
        
            id:'9', 
            img:require('../../../assets/atividades/sports.png'),
            imgwhite:require('../../../assets/ativiadesBranco/sports_white.png'),
            nome:'Esporte'
        
        }
    ]);

   
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "blue" : "white";

    
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
   
       
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} 
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:30,
        
        paddingBottom:30,
        justifyContent:'center',
        alignItems:'center'
    },
    containerItem:{
       padding:20,
       justifyContent:'center',
       alignItems:'center'
    },

    styleBorderItem:{
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        borderWidth:1,
        borderColor:'black'
    },

  title: {
    fontSize: 13,
    color:'black',
    fontWeight:'bold'
  },
  img:{
    width:50,
    height:50,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9
  },
  areaImg:{
    width:65,
    height:65,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60
  }
});

export default App;