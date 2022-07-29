import React, { useState } from "react";
import { FlatList, StyleSheet, Text, Modal,Image, TouchableOpacity, View } from "react-native";
import styleCard from "../../Components/styleCard";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const DATA = [
  {
    id: 1,
    date: 'HOJE, 23 de JANEIRO',
    humor: 'BEM',
    time: '08:35',
    image: require("../../assets/humores/happy.png"),
    text:'cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo.'
  },
  {
    id: 2,
    date: 'ONTEM, 22 de JANEIRO',
    humor: 'MAL',
    time: '08:35',
    image: require('../../assets/humores/terrible.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 3,
    date: '21 de JANEIRO',
    humor: 'TRISTE',
    time: '08:35',
    image: require('../../assets/humores/sad.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 4,
    date: '20 de JANEIRO',
    humor: 'BEM',
    time: '08:35',
    image: require('../../assets/humores/happy.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 5,
    date: '19 de JANEIRO',
    humor: 'BEM',
    time: '08:35',
    image: require('../../assets/humores/happy.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 6,
    date: '18 de JANEIRO',
    humor: 'BEM',
    time: '08:35',
    image: require('../../assets/humores/happy.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 7,
    date: '17 de JANEIRO',
    humor: 'FELIZ',
    time: '08:35',
    image: require('../../assets/humores/radiant.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 8,
    date: '16 de JANEIRO',
    humor: 'NORMAL',
    time: '08:35',
    image: require('../../assets/humores/ok.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 9,
    date: '15 de JANEIRO',
    humor: 'NORMAL',
    time: '08:35',
    image: require('../../assets/humores/ok.png'),
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
 
 
]
const Item = ({ item, onPress, backgroundColor}) => {
  const colors = {
    BEM: '#E24B4B',
    MAL: '#4B75E2',
    TRISTE: '#4BE263',
    FELIZ: '#EEAD2D',
    NORMAL: 'grey'
  }
  return (
    <TouchableOpacity style={[styleCard.container, backgroundColor]}
      onPress={onPress}>
      <View style={styleCard.containerCard}>

        <View style={styleCard.areaIcone}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styleCard.title}>{item.date}</Text>
        <View style={styleCard.containerTimeAndState}>
          <Text style={[styleCard.humor, { color: colors[item.humor] }]}>{item.humor}</Text>
          <Text style={styleCard.time}>{item.time}</Text>
        </View>

        <View style={styleCard.icones}>

          <MaterialIcon name='party-popper' size={20} color={'#000000'} />
          <Text style={styleCard.txtIcon}>Festa</Text>

          <MaterialIcon name='checkbox-blank-circle' size={4} color={'#000000'} />
          <FontAwesome5 name='running' size={20} color={'#000000'} />
          <Text style={styleCard.txtIcon}>Esporte</Text>

          <MaterialIcon name='checkbox-blank-circle' size={4} color={'#000000'} />
          <FontAwesome5 name='utensils' size={20} color={'#000000'} />
          <Text style={styleCard.txtIcon}>Cozinhar</Text>

        </View>

        <View style={styleCard.txtArea}>

          <Text numberOfLines={1} style={{ width: 120, color: '#ACACAC', marginLeft: 20 }}>{item.text}</Text>

        </View>

      </View>
    </TouchableOpacity>
    
  )
}
export default ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null)
  const renderItem = ({ item }) => {



    return <Item
      item={item}
      onPress={() => {
        setSelectedId(item.id)
        navigation.navigate('Detalhes', { item })
      }}

    />
  }
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  )
};
const styles = StyleSheet.create({
  image: {
    width: 57,
    height: 57
  }
})