import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up Here !</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name : </Text>
          <TextInput 
            placeholder='Enter your first name'
            style={styles.input}
            placeholderTextColor={COLORS.GREY}
          />
          <Text style={styles.label}>Last Name : </Text>
          <TextInput 
            placeholder='Enter your last name'
            style={styles.input}
            placeholderTextColor={COLORS.GREY}
          />
          <Text style={styles.label}>Email : </Text>
          <TextInput 
            placeholder='Enter your email address'
            style={styles.input}
            placeholderTextColor={COLORS.GREY}
          />
          <Text style={styles.label}>Password : </Text>
          <TextInput 
            placeholder='Enter your password'
            style={styles.input}
            placeholderTextColor={COLORS.GREY}
          />
          <Text style={styles.label}>Confirm Password : </Text>
          <TextInput 
            placeholder='Enter your confim password'
            style={styles.input}
            placeholderTextColor={COLORS.GREY}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text style={styles.text}>Already have an Account ?</Text>
          <Text style={styles.link}>Sign In</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_PURPLE,
    width:'100%',
    height: '100%'
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.GREY,
    marginTop: 50
  },
  input: {
    width: '90%',
    padding: 10,
    backgroundColor: COLORS.LIGHT_PURPLE,
    borderRadius: 5,
    marginTop: 5
  },
  label: {
    color: COLORS.GREY,
    fontSize: 18,
    marginTop: 15
  },
  button: {
    backgroundColor: COLORS.LIGHT_PURPLE,
    width: '60%',
    alignSelf: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    marginTop: 40
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.GREY,
    fontSize: 16
  },
  linkContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    color: COLORS.GREY,
    marginRight: 10,
    fontSize: 14
  },
  link: {
    color: COLORS.GREY,
    textDecorationLine: 'underline',
    fontSize: 14
  },
  bottomContainer: {
    backgroundColor: COLORS.DARK_PURPLE,
    width:'100%',
    height: '100%',
    marginTop: 80,
    borderTopLeftRadius: 60
  },
  inputContainer: {
    marginLeft: 40,
    marginTop: 40,
    padding: 5
  }
})

export default SignupScreen