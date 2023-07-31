// FoodDetailsScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { HeartIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './FoodDetailsScreenStyles';

export default function FoodDetailsScreen(props) {
  let item = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
        blurRadius={40}
      />
      <SafeAreaView>
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ChevronLeftIcon size={23} stroke={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartButton}>
            <HeartIcon size={23} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.foodImageContainer}>
          <Image source={item.image} style={styles.foodImage} />
          <Text style={styles.foodNameText}>{item.name}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.quantityButton}>
            <MinusIcon size={20} strokeWidth={1.8} color="black" />
          </View>
          <Text style={styles.quantityText}>1</Text>
          <View style={styles.quantityButton}>
            <PlusIcon size={20} strokeWidth={1.8} color="black" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Animatable.View
            delay={180}
            animation="slideInDown"
            style={styles.infoItem}
          >
            <Image
              source={require('../assets/icons/calories.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>130 cal</Text>
          </Animatable.View>
          <Animatable.View
            delay={280}
            animation="slideInDown"
            style={styles.infoItem}
          >
            <Image
              source={require('../assets/icons/clock.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>15-20 min</Text>
          </Animatable.View>
          <Animatable.View
            delay={380}
            animation="slideInDown"
            style={styles.infoItem}
          >
            <Image
              source={require('../assets/icons/chat.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>4.6 vote</Text>
          </Animatable.View>
          <Animatable.View
            delay={480}
            animation="slideInDown"
            style={styles.infoItem}
          >
            <Image
              source={require('../assets/icons/weight.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>350 g</Text>
          </Animatable.View>
        </View>
        <View style={styles.descriptionContainer}>
          <Animatable.Text
            animation="slideInUp"
            style={styles.descriptionTitle}
          >
            Description
          </Animatable.Text>
          <Animatable.Text delay={100} animation="slideInUp" style={styles.descriptionText}>
            {item.desc}
          </Animatable.Text>
        </View>
        {/* add to cart button */}
        <View style={styles.priceContainer}>
          <Animatable.Text delay={100} animation="slideInLeft" style={styles.priceText}>
            ${item.price}
          </Animatable.Text>
          <Animatable.View delay={100} animation="slideInRight">
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </View>
  );
}
