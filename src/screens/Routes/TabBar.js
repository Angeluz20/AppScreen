import  React,{useState} from 'react';
import DailyStorie from '../Screens/DailyStorie/DailyStorie';
import Cards from '../Screens/Cards/index';
import Profile from '../Screens/Profile/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Text,View, Modal,ScrollView, TouchableOpacity} from 'react-native';
import Teste from '../Screens/DailyRecord/teste';

const Tab = createBottomTabNavigator();

 export default function TabBar(){
  const [modalVisible, setModalVisible] = useState(false)
  function OpenModal({navigation}){
    setModalVisible(true)
    return(
    <View style={{justifyContent:"center"}}>
      <Modal 
      animationType='slide'
      visible={modalVisible}>
        <View>
          <ScrollView>  
            <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
              <Text>exit</Text>
          </TouchableOpacity>
          <Teste/> 
        
          </ScrollView>  
         
          </View>
    
      </Modal>
    </View>)
  }
  return(
    <Tab.Navigator initialRouteName='DailyStorie'
    screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        position:'absolute',
        backgroundColor:'#fff',
        height:72,
        
      },
        tabBarActiveTintColor:"#304FFE",
        tabBarInactiveTintColor:'grey',
      
    }}>
      <Tab.Screen 
       options={{
        tabBarIconStyle:{
        margin:15,
        width:40,
        height:32,
        backgroundColor:'#E5E5E5',
        borderRadius:15,
        },
        title: '',
        headerTransparent:true,
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={20}/>
        ),
      }}
      name='DailyStorie'
      component={DailyStorie}
      />

        <Tab.Screen 
          options={{
              title: '',
              headerTransparent:true,
              headerShown: false,
              
          tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircle" color={'#304FFE'} size={45} />
          ),      
        }} 
          name='DailyRecord'
          component={Teste}
          
      />

      <Tab.Screen 
         options={{
            tabBarIconStyle:{
              margin:15,
              width:40,
              height:32,
              backgroundColor:'#E5E5E5',
              borderRadius:15,   
          }, 
            title: '',
            headerTransparent:true,
            headerShown: false,
         tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-ul" color={color} size={20} />
          ),
        }} 
         name='Profile'
         component={Profile}
      />
       
    </Tab.Navigator>
  )

}




