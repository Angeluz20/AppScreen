import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      marginTop:100
  },
    item: {
      width:115,
      height:115,
      padding: 20,
      marginHorizontal: 16,
      borderRadius:60,
      justifyContent:'center',
      alignItems:'center'
    },
    title: {
      fontSize: 32,
    },
    txtAreaPhoto:{
      justifyContent:'center',
      alignItems:'center',
      marginBottom:50,
      marginTop:-60
    },
    txtPhoto:{
      fontSize:25,
      fontWeight:'bold',
      color:'black'
    }
  });