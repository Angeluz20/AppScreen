import React, { useRef, useState } from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SelectAvatar from "../SelectPhoto/SelectAvatar";
import styles from './styleProfiEdtiton'
import SelectList from 'react-native-dropdown-select-list'
import SelectGenero from '../selectGenero/select'
export default ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    function openModal() {

        setModalVisible(true);
    }

    const { item } = route.params


    return (
        <View style={styles.container}>
            <Image source={item.avatar} style={{ width: 100, height: 100 }} />

            <TouchableOpacity
                style={styles.btnAlterPhoto}
                onPress={(openModal)}
            >
                <Text style={styles.btnPhotoText}>ALTERAR FOTO</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible}>

                <View>
                    <TouchableOpacity
                        style={styles.styleBtn}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.txtBtn}>x</Text>

                    </TouchableOpacity>


                </View>
                <SelectAvatar />
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.btnSaveModal}
                >
                    <Text style={styles.btnSaveText}>SALVAR</Text>
                </TouchableOpacity>
            </Modal>


            <View style={styles.styleInput}>
                <Text style={styles.txtLabel}>NOME</Text>
                <TextInput style={styles.input}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 80 }}>{item.nome}</Text>
                </TextInput>
                <Text style={styles.txtLabel}>E-MAIL</Text>
                <TextInput style={styles.input}>
                    <Text style={{  fontSize: 18, color: 'black' }}>{item.email}</Text>
                </TextInput>
                <Text style={styles.txtLabel}>GÊNERO</Text>
                <View>
                    <SelectGenero/>
                </View>
                <Text style={styles.txtLabel}>DATA DE NASCIMENTO</Text>
                <TextInput style={styles.input}>
                    <Text style={{ fontSize: 18, color: 'black' }}>{item.dataNasc}</Text>
                </TextInput>
            </View>


            <TouchableOpacity
                style={styles.btnSave}
                onPress={() => navigation.navigate('ProfileScreee')}
            >
                <Text style={styles.btnSaveText}>SALVAR</Text>
            </TouchableOpacity>


        </View>
    )
}
