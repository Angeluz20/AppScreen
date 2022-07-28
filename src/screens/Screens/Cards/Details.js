import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/MaterialCommunityIcons';
import styleHumor from '../../Components/styleHumor';

export default ({ route, navigation }) => {
  const { item } = route.params;
  const colors = {
    BEM: '#E24B4B',
    MAL: '#4B75E2',
    TRISTE: '#4BE263',
    FELIZ: '#EEAD2D',
    NORMAL: 'grey'
  }
  return (


    <View style={styleHumor.container}>
    <View style={styleHumor.containerElements}>
       <TouchableOpacity
        style={styleHumor.btnSubmit}
        onPress={() => {
          navigation.navigate('DataList')
        }}>
        <Arrow name='arrow-left-top' size={20} color={'#969696'} />
      </TouchableOpacity>
    
     


      <View style={styleHumor.timeAnDateView}>
      <Text style={styleHumor.time}>
        <AntDesign name='clockcircleo' size={15} color={'#969696'} /> {item.time}
      </Text>

      <Text style={styleHumor.date}>
        <AntDesign name="calendar" size={15} color={'#969696'}/> {item.date}
      </Text>
    </View>

      <View style={styleHumor.emoji}>
        <Image source={item.image} style={{ width: 68, height: 68 }} />
      </View>

      <Text style={[styleHumor.humor, { color: colors[item.humor] }]}>{item.humor}</Text>




      <View style={styleHumor.areaCard}>

        <View style={styleHumor.areaIcon}>

          <View style={styleHumor.circleIcon}>
            <MaterialIcon name='party-popper' size={27} color={'#fff'} />
          </View>

          <View style={styleHumor.circleIcon}>
            <FontAwesome5 name='running' size={27} color={'#fff'} />
          </View>

          <View style={styleHumor.circleIcon}>
            <FontAwesome5 name='utensils' size={27} color={'#fff'} />
          </View>
         </View>


        <View style={styleHumor.SubTitle}>
          <Text style={{ color: 'black', fontWeight: '600', fontSize: 12 }}>Festa</Text>
          <Text style={{ color: 'black', fontWeight: '600', fontSize: 12 }}>Esporte</Text>
          <Text style={{ color: 'black', fontWeight: '600', fontSize: 12 }}>Cozinhar</Text>
        </View>
      </View>



      <View style={styleHumor.description}>
           
        <Text style={styleHumor.txtDescription}>{item.text}</Text>
      </View>
      </View>
    </View>
  )
};