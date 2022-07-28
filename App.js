
import React, { useState } from 'react';
import { Text, View, StyleSheet,SafeAreaView } from 'react-native';
import Signin from './src/pages/Siginin/Signin';
import Home from './src/pages/Home/home';

const App = () =>{
const [user, SetUser] = useState(null);


if(!user){
  return <Signin changeStatus={(user) => SetUser(user)} />
}
  return(
    <View >
    <Home/>
    </View>
  )
}


export default App;