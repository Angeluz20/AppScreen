import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import styleRecord from './StyleRecord';
import Teste from './teste';
export default function Record({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  function openModal() {
    setModalVisible(true);
  }
  return (

    <SafeAreaView style={styleRecord.container}>


      <View style={styleRecord.areaInfo}>
        <View style={styleRecord.imgLogoNeutral}>
          <Image source={require('../../assets/neutral.png')} />
        </View>
        <Text style={styleRecord.txt}>
          Você ainda não tem nenhum registro
          diário. Para começar, toque no ícone de
          adicionar na tela.
        </Text>
        <TouchableOpacity

          onPress={openModal}>
          <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 40 }}>+</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible}>
          <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.styleBtn}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.txtBtn}>x</Text>

            </TouchableOpacity>

            <Teste />
          </ScrollView>
        </Modal>
      </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    marginBottom: 30
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

  },
  txtBtn: {
    marginTop: -3,
    fontSize: 23,
    textAlign: 'center',
    justifyContent: 'center'
  },


})
