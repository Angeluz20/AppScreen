import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native'
import Signin from "../Screens/Signin/Signin";
import TabBar from './TabBar'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(

   
     <Stack.Navigator initialRouteName="Registro">
       

       <Stack.Screen
        options={{
         title: '',
         headerTransparent:true,
         headerShown: false,
       }} 
        name="Registro" component={TabBar}/>

        <Stack.Screen
        options={{
         title: '',
         headerTransparent:true,
         headerShown: false
       }} 
         name="Plus" component={TabBar}/>

         <Stack.Screen
        options={{
         title: '',
         headerTransparent:true,
         headerShown: false
       }} 
       name="Cards" component={TabBar}/>
         
           
     </Stack.Navigator>
    
     
 );
}

const styles = StyleSheet.create({
 btnSubmit:{
   backgroundColor:'#acacac',
   height:30,
   width:100,
   padding:5,
   alignItems:'center',
   borderRadius:5
 },
 txtSubmit:{
   color:'white'
 }})