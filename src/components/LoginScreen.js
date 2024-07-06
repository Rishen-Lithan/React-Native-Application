import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'
import { Entypo } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/Logo-pic.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username : </Text>
          <TextInput 
            placeholder='Enter the Username'
            style={styles.input}
            placeholderTextColor={COLORS.LIGHT_PURPLE}
          />
          <Text style={styles.label}>Password : </Text>
          <TextInput 
            placeholder='Enter the Password'
            style={styles.input}
            placeholderTextColor={COLORS.LIGHT_PURPLE}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
            <Entypo name="login" size={24} color={COLORS.DARK_PURPLE} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Don't have an Account ? </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY,
    width:'100%',
    height: '100%'
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: -40
  },
  header: {
    color: COLORS.GREY,
    textAlign: 'center',
    fontSize: 40,
    margin: 20,
    marginTop: 50
  },
  input:{ 
    backgroundColor: COLORS.GREY,
    padding: 10,
    margin: 20,
    marginTop: 5,
    borderRadius: 5
  },
  label: {
    color: COLORS.GREY,
    fontSize: 16,
    marginLeft: 20
  },
  button: {
    backgroundColor: COLORS.GREY,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    position: 'relative',
    marginTop: 20
  },
  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    color: COLORS.DARK_PURPLE,
    fontSize: 19
  },
  text:{
    color: COLORS.GREY,
    marginRight: 5
  },
  linkText:{ 
    color: COLORS.GREY,
    textDecorationLine: 'underline'
  },
  imageContainer: {
    margin: 20
  },
  content: {
    backgroundColor: COLORS.DARK_PURPLE,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 60
  },
  inputContainer: {
    margin: 20
  },
  icon: {
    marginRight: 10
  },
  textContainer: {
    margin: 10,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row'
  }
})

export default LoginScreen