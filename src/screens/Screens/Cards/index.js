import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DataList from "./DataList";
import Details from "./Details";
const Stack = createNativeStackNavigator();
const App = () => {
  return (

    <Stack.Navigator initialRouteName="DataList">
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='DataList'
        component={DataList} />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='Detalhes'
        component={Details} />

    </Stack.Navigator>

  )
}
export default App;