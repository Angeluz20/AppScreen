import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileEdition from "./MainProfile/ProfileEdition";
import ProfileScreee from "./MainProfile/ProfileScreee";
import SelectAvatar from "./SelectPhoto/SelectAvatar";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App(){
    return(
        <Stack.Navigator initialRouteName="ProfileScreee">
            <Stack.Screen
           options={{
            title: '',
            headerTransparent:true,
            headerShown: false, 
            }}
             name="ProfileScreee" 
             component={ProfileScreee}//home
            />

            <Stack.Screen
             options={{
                title: '',
                headerTransparent:true,
                headerShown: false, 
                }}
             name="ProfileEdition" 
             component={ProfileEdition}//Details
            />

             <Stack.Screen
                options={{
                    title: '',
                    headerTransparent:true,
                     headerShown: false, 
                 }}
             name="SelectAvatar" 
             component={SelectAvatar}//Details
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    textTitle:{
        fontSize:30
    }
})