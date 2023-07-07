import { View, Text, Image, TouchableOpacity, ViewComponent } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { welcomeScreenStyles } from '../styles/welcomeScreenStyles'; // Import the styles
import { StyleSheet } from 'react-native';


export default function WelcomeScreen() {

    const navigation = useNavigation();

  return (
  
        <SafeAreaView style={{flex:1, backgroundColor:themeColors.bg}}>
            <View style={welcomeScreenStyles.mainContainer}>
                <Text style={welcomeScreenStyles.welcomeText}>Welcome!</Text>
                    <View style={welcomeScreenStyles.imageContainer}>
                        <Image
                            source={require('../assets/Images/Welcome.png')}
                            style={welcomeScreenStyles.welcomeImage}
                        />
                    </View>
                    <View style={welcomeScreenStyles.buttonContainer}>
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('SignUp')}
                            style= {welcomeScreenStyles.signUpButton}
                        >
                            <Text style={welcomeScreenStyles.signUpButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                    <View style={welcomeScreenStyles.accountTextContainer}>
                        <Text style={welcomeScreenStyles.accountText}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text style={welcomeScreenStyles.loginButton}> Log in</Text>

                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </SafeAreaView>
  )
}


