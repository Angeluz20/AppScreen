import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleInput: {
        width: '80%',
        justifyContent: 'center',

    },
    txtLabel: {
        color: 'black',
        margin: 12,
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 40
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,

    },
    btnSave: {
        width: '80%',
        backgroundColor: '#304FFE',
        padding: 17,
        margin: 25,
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 45
    },
    btnSaveModal:{
        width: '80%',
        backgroundColor: '#304FFE',
        padding: 17,
        margin: 50,
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 45
    },
    btnSaveText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',

    },
    btnAlterPhoto: {
        backgroundColor: '#bfddf3',
        width: '40%',
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#b3c7d6',
        marginTop: 50,
        marginBottom: 50
    },
    btnPhotoText: {
        color: '#304FFE',
        fontSize: 15,
        fontWeight: 'bold'
    },
    styleBtn: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#C6CEFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 10,
        justifyContent:'center'
    }, txtBtn:{
        fontSize:20
    }
})