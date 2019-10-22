import React, { useState, useEffect } from 'react'; 
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {    
  const [rm, setRm ] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('rm').then(rm => {
      if (rm) {
        navigation.navigate('Login');
      }
    })
  }, []);

  async function handleSubmit() {
    const response = await api.post('/rm', {
      rm
    })

    const { _id } = response.data;

    await AsyncStorage.setItem('rm', _id);

    navigation.navigate('ListCardapio');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
      <Image source={logo} style={styles.img} />

      <View style={styles.form}>
        <Text style={styles.label}>INSIRA SEU RM *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu RM"
          placeholderTextColor="#999"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={rm}
          onChangeText={setRm}
        />

       <TouchableOpacity onPress={handleSubmit} style={styles.button}>
         <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
      height: 150,
      width: 130,
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});