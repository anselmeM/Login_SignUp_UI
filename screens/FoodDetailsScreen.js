import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { HeartIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FoodDetailsStyles from './FoodDetailsStyles';

export default function FoodDetailsScreen(props) {
  let item = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={FoodDetailsStyles.container}>
      <Image
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        source={require('../assets/images/background.png')}
        blurRadius={40}
        style={FoodDetailsStyles.backgroundImage}
      />
      <SafeAreaView>
        <View style={FoodDetailsStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={FoodDetailsStyles.headerButton}>
            <ChevronLeftIcon size={23} stroke={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={FoodDetailsStyles.headerButton}>
            <HeartIcon size={23} color="black" />
          </TouchableOpacity>
        </View>
        <View style={FoodDetailsStyles.centerContent}>
          <Image style={FoodDetailsStyles.foodImage} source={item.image} />
          <Text style={FoodDetailsStyles.foodName}>{item.name}</Text>
        </View>
        <View style={FoodDetailsStyles.quantityContainer}>
          <View style={FoodDetailsStyles.quantityButtons}>
            <TouchableOpacity style={FoodDetailsStyles.quantityButton}>
              <MinusIcon size={20} strokeWidth={1.8} color="black" />
            </TouchableOpacity>
            <Text style={FoodDetailsStyles.quantityText}>1</Text>
            <TouchableOpacity style={FoodDetailsStyles.quantityButton}>
              <PlusIcon size={20} strokeWidth={1.8} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={FoodDetailsStyles.infoContainer}>
          {/* Animatable Views */}
        </View>
        <View style={FoodDetailsStyles.descriptionContainer}>
          {/* Animatable Texts */}
        </View>
        {/* Add to cart button */}
        <View style={FoodDetailsStyles.addToCartContainer}>
          {/* Animatable Text */}
          {/* Animatable View */}
        </View>
      </SafeAreaView>
    </View>
  );
}
