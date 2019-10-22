import React, { useState, useEffect }from 'react';
import { SafeAreaView, ScrollView ,Image, StyleSheet } from 'react-native';

import CardapioList from '../components/CardapioList';

import logo from '../assets/logo.png';


export default function ListCardapio() {
    const [dia, setDia] = useState();

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