import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.conatainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
            <AntDesign name="user" size={24} color="black" style={styles.profileIcon} />
        </TouchableOpacity>
        <TextInput 
            placeholder='Search Here'
            placeholderTextColor={COLORS.LIGHT_PURPLE}
            style={styles.serachBar}
        />
      </View>
      <View style={styles.upHeader}>
        <Text style={styles.headingOne}>Main Categories</Text>
        <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>View All</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    conatainer: {
        backgroundColor: COLORS.DARK_PURPLE,
        width: '100%',
        height: '100%'
    },
    header: {
        margin: 20,
        padding: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    profileIcon: {
        alignSelf: 'center',
        marginTop: 5
    },
    serachBar: {
        backgroundColor: COLORS.GREY,
        width: '80%',
        padding: 10,
        borderRadius: 5,
        marginLeft: 20
    },
    headingOne: {
        color: COLORS.GREY,
        marginLeft: 30,
        fontSize: 16,
        fontWeight: '600'
    },
    profileContainer: {
        backgroundColor: COLORS.WHITE,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    upHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 20
    },
    viewText: {
        color: COLORS.GREY
    },
})

export default HomeScreen