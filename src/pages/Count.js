import React from 'react';
import { Text,TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

import logo from '../assets/logo.png';

export default function Count({ navigation }) {
  function handleNavigate() {
      navigation.navigate('ListCardapio');
  }

  return (
      <SafeAreaView style={styles.container}>
          <Image source= {logo} style={styles.img}/>
          <Text style={styles.pratotexto}>QUANTOS PRATOS?</Text>
          
          <TouchableOpacity onPress={handleNavigate} style={styles.button}>
              <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigate} style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigate} style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      marginTop: 70, 
  },

  img: {
      height: 100 ,
      resizeMode: "contain",
      alignSelf: 'center',
      marginTop: 10,
  },

  pratotexto: {
    fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 30,
        marginBottom: 50,
        marginHorizontal: '10%',
        textAlign: 'center'
  },

  button: {
      marginHorizontal: '10%',
      marginVertical: 10,
      height: 35,
      backgroundColor: '#f05a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      marginBottom: 30,
  },

  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize:16,
  },
});