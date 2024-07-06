import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'
import { AntDesign } from '@expo/vector-icons';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.header}>Welcome !</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>List Master</Text>
        <Text style={styles.description}>The Online Platform where you can buy</Text>
        <Text style={styles.description02}>and sell your products</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started with List Master</Text>
            <AntDesign name="arrowright" size={22} color={COLORS.DARK_PURPLE} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.DARK_PURPLE
    },
    topContainer: {
        backgroundColor: COLORS.GREY,
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: '50%',
        borderBottomLeftRadius: '50%'
    },
    bottomContainer: {
        backgroundColor: COLORS.DARK_PURPLE,
        padding: 10,
        height: '50%',
    },
    header: {
        fontSize: 40,
        color: COLORS.MEDIUM_PURPLE     
    },
    title: {
        color: COLORS.GREY,
        textAlign: 'center',
        margin: 10,
        fontSize: 40,
        marginTop: 20
    },
    description: {
        color: COLORS.GREY,
        fontSize: 16,
        textAlign: 'center',
        opacity: 0.6,
        margin: 10
    },
    description02: {
        color: COLORS.GREY,
        fontSize: 16,
        textAlign: 'center',
        opacity: 0.6,
        margin: 10,
        marginTop: 0
    },
    button: {
      alignSelf: 'center',
      margin: 20,
      display: 'flex',
      flexDirection: 'row',
      marginTop: 140,
      backgroundColor: COLORS.WHITE,
      padding: 10,
      borderRadius: 5
    },
    buttonText: {
      color: COLORS.DARK_PURPLE,
      fontSize: 20,
      marginRight: 10,
      padding: 5
    },
    icon:{ 
      marginTop: 7
    }
})

export default SplashScreen