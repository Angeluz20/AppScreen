import React, { useState } from "react";
import { FlatList, SafeAreaView, TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActivitiesSelect from './ModalHumorDaily/ActivitiesSelect'
import RenderData from "../DailyStorie/RenderData";
import { DATA } from "./DataList";


const Item = ({ item, onPress, backgroundColor, textColor }) => (

  <View>


    <View style={styles.containerIcon}>

      <View style={[styles.item, backgroundColor]}>
        <TouchableOpacity onPress={onPress} >
          <Image source={item.img} style={{ width: 55, height: 55 }} />
        </TouchableOpacity>

      </View>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>

  </View>
);

const Teste = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [newTask, setNewTask] = useState('')
  const renderItem = ({ item }) => {
    function deleteCard(id) {
      console.log(id)

    }
    const backgroundColor = item.id === selectedId ? "#304FFE" : "white";
    const color = item.id === selectedId ? '#C801FA' : '#969696';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.exit}
          onPress={() => navigation.navigate('Cards')}>
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.TitleStyle}>
          <Text style={styles.txtTitleTop}>Como você está?</Text>
        </View>

        <View style={styles.timeAnDateView}>

          <Text style={styles.date}>
            <AntDesign name="calendar" size={15} color={'#969696'} />  HOJE 23 DE JANEIRO
          </Text>

          <Text style={styles.time}>
            <AntDesign name='clockcircleo' size={15} color={'#969696'} /> 08:35
          </Text>

        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id}
          extraData={selectedId}

        />

        <View style={styles.activitiesArea}>

          <ActivitiesSelect />

        </View>



        <KeyboardAvoidingView
          style={styles.CommentUser}>
          <TextInput
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            placeholder="Escreva aqui o que aconteceu hoje... ">
          </TextInput>
        </KeyboardAvoidingView>



        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.btnSave}
        >
          <Text style={styles.btnSaveText}>SALVAR</Text>
        </TouchableOpacity>


      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 80
  },
  styleBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#C6CEFF',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 19.5,
    marginRight: 350,
    marginTop: 70

  },
  TitleStyle: {
    marginTop: 80,
    marginBottom: 90,
    alignItems: 'center'
  },
  txtTitleTop: {
    fontSize: 37,
    color: 'black',
    fontWeight: 'bold'
  },
  timeAnDateView: {
    alignItems: 'center',
    marginVertical: -80,
    flexDirection: 'row',
    marginBottom: 70,
    justifyContent: 'space-between',
    width: '50%'
  },
  time: {
    color: '#969696'
  },
  date: {
    color: '#969696'
  },
  containerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    padding: 7,

  },
  item: {
    backgroundColor: 'white',
    width: 65,
    height: 65,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  activitiesArea: {
    width: '90%',
    height: 530,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 25,
    marginTop: 60,
    padding: 5,

  },
  CommentUser: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    height: 100,
    marginBottom: 10,
    padding: 10
  },
  btnSave: {
    width: '90%',
    backgroundColor: '#304FFE',
    padding: 17,
    margin: 25,
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 40,
  },
  btnSaveText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  exit: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#C6CEFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 400,
    marginTop: 30,
  }

});
export default Teste;