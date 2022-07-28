import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cards from '../../Cards/index'
import ModalCardsSelect from '../teste'
import Details from '../../Cards/Details'
const Stack = createStackNavigator();
export function rotaModal(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="cards"
            component={Cards}
            />
            <Stack.Screen
            name="ModalCards"
            component={ModalCardsSelect}
            />
              <Stack.Screen
            name="Details"
            component={Details}
            />
        </Stack.Navigator>
    )
}