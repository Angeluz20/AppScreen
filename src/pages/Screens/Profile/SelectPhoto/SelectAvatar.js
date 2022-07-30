import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import styles from "./stylePhoto";
const numColumns= 3

const DATA = [
          
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
         
         

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <View>
    <Image source={item.img} style={{width:100, height:100}}/>
  </View>
  </TouchableOpacity>
);

const Humor = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "blue" : "white";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.txtAreaPhoto}>
            <Text style={styles.txtPhoto}>Selecione a foto de perfil</Text>
        </View>
      <FlatList
        data={DATA} 
        numColumns={numColumns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};




export default Humor;

