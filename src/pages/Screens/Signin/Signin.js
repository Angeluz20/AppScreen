
import { async } from "@firebase/util";
import React, {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../../../firebaseConnection';
import Icon from '../../../../node_modules/react-native-vector-icons/Entypo'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function Signin({changeStatus}){
   const [type, setType] = useState('login')
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const[securePassword, setSecurePassword] = useState(true)

   function handleLogin(){
    //login
    if(type === 'login'){
        const user =    signInWithEmailAndPassword(auth,email,password)
        .then(value => {
                changeStatus(user)
                console.log('Acesso concedido! \n' + value.user.uid)
               
                return;
            })
            .catch(error => {
                if(error.code === 'auth/user-not-found'){
                    alert('Usuário não encontrado');
                    return;
                }
                if(error.code === 'auth/wrong-password'){
                    alert('Senha incorreta');
                    return;
                }
                if(error.code === 'auth/invalid-email'){
                    alert('preencha todos os campos');
                    return;
                }
               console.log(error)
            })
          

                
    }else{
    //Cadastro
    const user =    createUserWithEmailAndPassword(auth,email,password)
    .then(value => {
            changeStatus(user)
            console.log('cadastrado com sucesso! \n' + value.user.uid)
            alert('Usuário cadastrado com sucesso');
                return;
        })
             .catch(error => {
                if(error.code === 'auth/email-already-in-use'){
                    alert('Usuário já existente');
                    return;
                }
               console.log(error)
            })
    }
   }
   

   return(
     <View style={styles.container}>
        
        <View>
        <Image source={require('../../assets/login.png')} style={{marginBottom:50, marginTop:-45}}/>
        </View>
    
       <TextInput
       placeholder="e-mail"
       placeholderTextColor={'#969696'}
       value={email}
       onChangeText={value => setEmail(value)}
       style={styles.input}
       fontSize={18}
       />

       <View style={styles.inputPassword}>
       <TextInput
       placeholder="senha"
       placeholderTextColor={'#969696'}
       value={securePassword}
       secureTextEntry={securePassword}
       onChangeText={value => setPassword(value)}
       fontSize={18}
       />
       <View style={{position:'absolute', marginLeft:340, marginTop:15}}>
        <TouchableOpacity 
        onPress={() => setSecurePassword(!securePassword)}
        >
            {securePassword == true ?  <Icon name='eye' color={'#969696'} size={35}/>: <Icon name='eye-with-line' color={'#969696'} size={35}/>}
      
      
      </TouchableOpacity>
      </View>
      </View>

       <TouchableOpacity 
       style={styles.btn}
        title="ENTRAR"
        onPress={handleLogin}>
        <Text style={styles.btnTxt}>
           {type === 'login'?'ENTRAR':'CADASTRAR'}
        </Text>
       </TouchableOpacity>
       
    <TouchableOpacity
        title="Cadastrar"
        style={styles.btnCad}
        onPress={() => setType(type => type === 'login' ? 'cadastro':'login')}>
       <Text style={styles.btnTxtCad}>
       {type === 'login'?'Criar uma conta ':'Fazer Login'}
        </Text>
    </TouchableOpacity>
   </View> 
   )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#304FFE',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
     width:400,
     padding:13,
     backgroundColor:'white',
     marginTop:20,
     borderRadius:10,
     flexDirection:'row',
     height:65
    },
    inputPassword:{
        width:400,
        padding:13,
        backgroundColor:'white',
        marginTop:20,
        borderRadius:10,
        flexDirection:'row',
        height:65
    },
    btn:{
        backgroundColor:'#C6CEFF',
        width:150,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,
        borderRadius:10
    },
    btnCad:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    btnTxt:{
        fontSize:15,
        color:'#304FFE',
        fontWeight:'bold',
        lineHeight:18.89
    },
    btnTxtCad:{
        color:'white'
    }
})