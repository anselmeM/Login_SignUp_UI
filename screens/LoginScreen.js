import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { themeColors } from '../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import LoginScreenStyles from '../styles/loginScreenStyles'; // Import the styles

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View  style={[LoginScreenStyles.container, { flex: 1, backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={LoginScreenStyles.safeArea}>
        <View style={LoginScreenStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={LoginScreenStyles.backButton}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={LoginScreenStyles.logoContainer}>
          <Image source={require('../assets/Images/bubble-gum-delivery-of-coffee-and-donuts-in-a-paper-bag.png')} style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={LoginScreenStyles.form}>

        <Text style={LoginScreenStyles.labelText}>Email Address</Text>
        <TextInput
          style={LoginScreenStyles.textInput}
          placeholder="email"
          value="john@gmail.com"
        />
        <Text style={LoginScreenStyles.labelText}>Password</Text>
        <TextInput
          style={LoginScreenStyles.textInput}
          secureTextEntry
          placeholder="password"
          value="test12345"
        />
        <TouchableOpacity style={LoginScreenStyles.forgotPassword}>
          <Text style={LoginScreenStyles.labelText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={LoginScreenStyles.loginButton}>
          <Text style={LoginScreenStyles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={LoginScreenStyles.orText}>Or</Text>
      <View style={LoginScreenStyles.socialIconsContainer}>
        <TouchableOpacity style={LoginScreenStyles.socialIcon}>
          <Image source={require('../assets/Images/Icons/icons8-google-48.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={LoginScreenStyles.socialIcon}>
          <Image source={require('../assets/Images/Icons/icons8-apple-logo-48.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={LoginScreenStyles.socialIcon}>
          <Image source={require('../assets/Images/Icons/icons8-facebook-48.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
      <View style={LoginScreenStyles.createAccountContainer}>
        <Text style={LoginScreenStyles.createAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={LoginScreenStyles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
