import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#304FFE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 400,
        padding: 13,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        height: 65
    },
    inputPassword: {
        width: 400,
        padding: 13,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        height: 65,
        padding:10,
      
    },
    btn: {
        backgroundColor: '#C6CEFF',
        width: 150,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        borderRadius: 10
    },
    btnCad: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    btnTxt: {
        fontSize: 15,
        color: '#304FFE',
        fontWeight: 'bold',
        lineHeight: 18.89
    },
    btnTxtCad: {
        color: 'white'
    }
})