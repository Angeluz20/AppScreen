import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 15, 
    marginTop:30
  },
  containerCard: {
    backgroundColor: '#FFFFFF',
    height: 158,
    padding: 15,
    borderRadius: 20,
    marginVertical: -16,
    marginHorizontal: 15
  },
  title: {
    color: '#ACACAC',
    marginLeft: 90,
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    fontSize: 16
  },
  containerTimeAndState: {
    flexDirection: 'row',
    margin: 10,
  },
  humor: {
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: '700',
    fontSize: 26,
    marginLeft: 80,
    marginVertical: -10
  },
  time: {
    color: '#ACACAC',
    fontFamily: 'Source Sans Pro',
    marginStart: 29,
    marginLeft: 5
  },
  areaIcone: {
    width: 57,
    height: 57,
    borderRadius: 10,
    marginBottom: -60,
    marginLeft: 10,
    marginVertical: 10,
    marginStart: 15
  },
  icones: {
    width: 259,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtArea: {
    width: 190,
    height: 30,
    color: 'grey'
  },
  txtIcon: {
    fontSize: 12,
    color: '#000000'
  }
})