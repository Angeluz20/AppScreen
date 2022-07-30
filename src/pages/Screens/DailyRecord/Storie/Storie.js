import React, { useState } from "react";
import { FlatList, SafeAreaView, TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActivitiesSelect from '../Activities/ActivitiesSelect'
import styles from './styleStorie'
import { DATA } from "../DataList";


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
          onPress={() => navigation.navigate('Cards')}
          style={styles.btnSave}
        >
          <Text style={styles.btnSaveText}>SALVAR</Text>
        </TouchableOpacity>


      </SafeAreaView>
    </ScrollView>
  );
};


export default Teste;