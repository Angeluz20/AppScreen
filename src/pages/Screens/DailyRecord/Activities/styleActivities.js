import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:30,
        
        paddingBottom:30,
        justifyContent:'center',
        alignItems:'center'
    },
    containerItem:{
       padding:20,
       justifyContent:'center',
       alignItems:'center'
    },

    styleBorderItem:{
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        borderWidth:1,
        borderColor:'black'
    },

  title: {
    fontSize: 13,
    color:'black',
    fontWeight:'bold'
  },
  img:{
    width:50,
    height:50,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9
  },
  areaImg:{
    width:65,
    height:65,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60
  }
});