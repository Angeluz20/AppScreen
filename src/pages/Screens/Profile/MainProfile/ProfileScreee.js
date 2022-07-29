import { async } from "@firebase/util";
import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, Modal } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebaseConnection";
import styles from './styleProfileScreen'
const DATA = [
    {
        id: '1',
        avatar: require('../../../assets/humores/ok.png'),
        nome: 'FULANO',
        genero: 'MASCULINO',
        dataNasc: '15/12/1998',
        email: 'TESTE@GMAIL.COM'
    }
]

const Item = ({ item, onPress, openModal }) => {
    const [modalVisible, setModalVisible] = useState(false)
    function openModal() {

        setModalVisible(true)

    }
    async function Deslogou() {
        await signOut(auth)
            .then(() => {

                console.log('Usuário deslogado! \n')

            })

            .catch(error => console.log(error));

    }


    return (
        <View style={styles.container}>

            <View style={styles.avatar}>
                <Image source={item.avatar} style={{ width: 100, height: 100 }} />
            </View>

            <View style={styles.welcomeUser}>
                <Text style={{ fontSize: 25, color: 'black', fontFamily: 'SourceSansPro-Regular' }}>Olá, {item.nome}</Text>
            </View>



            <View style={styles.informationUser}>
                <Text style={styles.styletxtUser}>
                    E-MAIL:
                        <Text style={styles.styletxtUserfilled}>
                           {item.email}
                        </Text>
                </Text>

                <Text style={styles.styletxtUser}>
                    GÊNERO:
                        <Text style={styles.styletxtUserfilled}>
                            {item.genero}
                        </Text>
                </Text>

                <Text style={styles.styletxtUser}>
                    DATA DE NASCIMENTO:
                        <Text style={styles.styletxtUserfilled}>
                            {item.dataNasc}
                        </Text>
                </Text>
            </View>



            <View>
                <TouchableOpacity
                    style={styles.editProfile}
                    onPress={onPress}
                >

                    <Text style={styles.txtBtn}>EDITAR PERFIL</Text>
                </TouchableOpacity>
            </View>
           
            <View>
                <TouchableOpacity
                    onPress={() => openModal()}
                    style={styles.exit}
                >

                    <Text style={styles.txtBtnExit}>SAIR</Text>
                </TouchableOpacity>

                <Modal
                    style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}>

                        <View style={styles.styleModal}>

                             <Text style={styles.txtWarning}>
                                 Atenção!
                            </Text>

                            <Text style={styles.txtDescriptionModal}>
                                Deseja mesmo sair?
                            </Text>

                        <View style={styles.btnOption}>

                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.txtBtnModal}>CANCELAR</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={Deslogou}>

                                <Text style={styles.txtBtnModal}>
                                    SIM
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal >
            </View>
        </View>
    )
}


export default function ProfileScreen({ navigation }) {


    const [selectedId, setSelectedId] = useState(null)
    const renderItem = ({ item }) => {
        return (<Item
                item={item}
                onPress={() => {
                setSelectedId(item.id)
                navigation.navigate('ProfileEdition', { item })
            }}

        />)

    }

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}
