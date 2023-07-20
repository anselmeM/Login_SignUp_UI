// FoodDetailsScreen.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { HeartIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from '../styles/foodDetailsScreenStyles'; // Import the styles

export default function FoodDetailsScreen(props) {
    let item = props.route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Images/background.png')} blurRadius={40} />
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backButton}>
                        <ChevronLeftIcon size={23} stroke={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heartButton}>
                        <HeartIcon size={23} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.absolute}>
                    <Image style={styles.childElement} source={item.image} />
                    <Text style={styles.text}> {item.name}</Text>
                </View>
                {/* Rest of your component code here... */}
            </SafeAreaView>
        </View>
    )
}
