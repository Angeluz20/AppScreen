
import React, { useState } from 'react';
import { Text, View, StyleSheet,SafeAreaView } from 'react-native';
import Signin from './src/pages/Screens/Signin/Signin';
import Routes from './src/pages/Routes/Routes'
import { NavigationContainer } from '@react-navigation/native';
const App = () =>{
const [user, SetUser] = useState(null);


if(!user){
  return <Signin changeStatus={(user) => SetUser(user)} />
}
  return(
    <NavigationContainer>
  
       <Routes/>
    
    </NavigationContainer>
  )
}

export default App;