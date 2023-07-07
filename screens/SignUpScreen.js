import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import signUpStyles from '../styles/signupStyles'; // Import the styles
import { themeColors } from '../theme/theme'; // Import the theme colors

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={signUpStyles.container}>
      <SafeAreaView style={signUpStyles.safeArea}>
        <View style={signUpStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={signUpStyles.backButton}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={signUpStyles.logoContainer}>
          <Image source={require('../assets/Images/Icons/icons8-apple-logo-48.png')} style={{ width: 165, height: 110 }} />
        </View>
      </SafeAreaView>
      <View style={signUpStyles.form}>
        <Text style={signUpStyles.labelText}>Full Name</Text>
        <TextInput
          style={signUpStyles.textInput}
          value="john snow"
          placeholder="Enter Name"
        />
        <Text style={signUpStyles.labelText}>Email Address</Text>
        <TextInput
          style={signUpStyles.textInput}
          value="john@gmail.com"
          placeholder="Enter Email"
        />
        <Text style={signUpStyles.labelText}>Password</Text>
        <TextInput
          style={signUpStyles.textInput}
          secureTextEntry
          value="test12345"
          placeholder="Enter Password"
        />
        <TouchableOpacity style={signUpStyles.signUpButton}>
          <Text style={signUpStyles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={signUpStyles.orText}>Or</Text>
      <View style={signUpStyles.socialIconsContainer}>
        <TouchableOpacity style={signUpStyles.socialIcon}>
          <Image source={require('../assets/Images/Icons/icons8-google-48.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={signUpStyles.socialIcon}>
          <Image source={require('../assets/Images/Icons/icons8-apple-logo-48.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={signUpStyles.socialIcon}>
          <Image source={require('../assets/Images/Icons/icons8-facebook-48.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
      <View style={signUpStyles.createAccountContainer}>
        <Text style={signUpStyles.createAccountText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={signUpStyles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
