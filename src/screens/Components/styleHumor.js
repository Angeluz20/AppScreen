import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeAnDateView:{
    alignItems:'center',
    marginVertical:30
  },
  time: {
    color: '#969696'
  },
  date: {
    color: '#969696'
  },
  humor: { 
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: '700',
    fontSize: 20,
    marginBottom:40
  },
  emoji: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerElements:{
    flex:1,
 
  },
  areaCard: {
    elevation: 1,
    height: 158,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
  },
  description: {
    paddingLeft:20,
    paddingTop:20,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 15,
  },
  txtDescription:{
    color:'#000000',
    fontWeight:'400',
    fontSize:15,
    letterSpacing: -0.3,
    lineHeight:22.63,
    fontFamily: 'Source Sans Pro',
    width:320,
    marginLeft:15,
    height:63,
    fontWeight:'400',
    textAlign:'justify',
  
  },
  btnSubmit: {
    width: 40,
    height:40,
    borderRadius: 10,
    backgroundColor: '#C6CEFF',
    alignItems: 'center',
    justifyContent: 'center',
   lineHeight:19.5
  },
  areaIcon: {
    padding: 10,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  SubTitle: {
    padding: 10,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
  },

  circleIcon: {
    width: 45,
    height: 45,
    backgroundColor: 'grey',
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: '#304FFE',
    justifyContent: 'center'
  }
})