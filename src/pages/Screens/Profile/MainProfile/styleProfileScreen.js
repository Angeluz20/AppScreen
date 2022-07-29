import { StyleSheet } from "react-native"
export default  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styletxtUser: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'SourceSansPro-Bold',
        letterSpacing: 0.4
    },
    styletxtUserfilled: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'SourceSansPro-SemiBold'
    },
    editProfile: {
        width: 380,
        height: 55,
        backgroundColor: '#304FFE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    txtBtn: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'SourceSansPro-Bold',
        letterSpacing: 1.5
    },
    exit: {
        width: 380,
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20
    },
    txtBtnExit: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'SourceSansPro-Bold',
        letterSpacing: 1.5
    },
    avatar: {
        marginTop: 80
    },
    welcomeUser: {
        marginTop: 60,
        marginBottom: 20
    },
    informationUser: {
        width: '75%',
        marginTop: 10,
        marginBottom: 30
    },
    styleModal: {
        flex: 1,
        elevation: 10,
        marginHorizontal: 90,
        marginVertical: 390,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 20,
        padding: 30
    },
    btnOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        //alignItems:'flex-end'
        marginLeft: 120,
        marginTop: 50
    },
    txtBtnModal: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtWarning: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    txtDescriptionModal: {
        color: '#969696',
        fontSize: 18,
        marginTop: 10
    }

})