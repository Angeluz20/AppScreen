import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function List () {
    const [ genero, setGenero ] = useState("MASCULINO");
    return (
        <View style={styles.container}>
           
            <RNPickerSelect
            placeholder={{ label: "Gênero", value: 'Masculino' }}
                onValueChange={(genero) => setGenero(genero)}
                items={[
                    { label: "MASCULINO", value: "MASCULINO" },
                    { label: "FEMININO", value: "FEMININO" },
                   
                ]}
              style={pickerSelectStyles}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        
    }
});

const pickerSelectStyles = StyleSheet.create({
  
    inputAndroid: {
        fontSize: 10,
        fontWeight:'bold',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        padding:35 
    }
});

