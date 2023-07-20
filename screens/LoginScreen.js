import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import LoginScreenStyles from '../styles/loginScreenStyles';
import { themeColors } from '../theme/theme';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email,setEmail] =useState('');
  const [password,setPassword] = useState('');

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

        <TextInput
          style={LoginScreenStyles.textInput}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={LoginScreenStyles.textInput}
          secureTextEntry
          placeholder="password"
          value='password'
          onChangeText={setPassword}
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
