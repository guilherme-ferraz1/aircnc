import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView , View, AsyncStorage, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import logo from '../../assets/logo.png';

import SpotList from '../components/SpotList';


export default function List( { navigation}) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray)
        })
    }, [])

    function handleLogout(){
        AsyncStorage.removeItem('user');
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <ScrollView>
            {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 15,
    }
})