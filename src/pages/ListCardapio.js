import React, { useState, useEffect }from 'react';
import { SafeAreaView, ScrollView ,Image, StyleSheet } from 'react-native';

import CardapioList from '../components/CardapioList';

import logo from '../assets/logo.png';


export default function ListCardapio({ navigation }) {
    const [dia, setDia] = useState();
    const rm = navigation.getParam('rm');

    useEffect(() => {
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                <CardapioList dia = {dia} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    logo: {
        height: 100 ,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 18,
    },
});