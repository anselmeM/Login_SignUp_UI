// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { categories, foodItems } from '../constants';
import FoodCard from '../components/FoodCard';
import styles from './HomeScreenStyles';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Burger');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* top buttons */}
        <View style={styles.topButtonsContainer}>
          <View style={styles.barsButton}>
            <Bars3CenterLeftIcon size={25} stroke={100} color="black" />
          </View>
          <View style={styles.avatarButton}>
            <Image
              source={require('../assets/images/avatar.png')}
              style={styles.avatarImage}
            />
          </View>
        </View>
        {/* punch line */}
        <View style={styles.punchLineContainer}>
          <Text style={styles.punchLineText}>Fast and</Text>
          <Text style={[styles.punchLineText, styles.punchLineTextBold]}>
            <Text style={styles.punchLineTextBold}>Delicious</Text> Food
          </Text>
        </View>
        {/* search  */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <MagnifyingGlassIcon size={40} style={styles.searchIcon} />
            <TextInput
              placeholder="Food"
              value="Search"
              style={styles.searchInput}
            />
          </View>
          <View style={styles.adjustmentsButton}>
            <AdjustmentsHorizontalIcon size={25} stroke={40} color="black" />
          </View>
        </View>

        {/* categories scrollbar */}
        <ScrollView
          style={styles.categoriesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            const textStyles = [styles.categoryText];
            if (isActive) {
              textStyles.push(styles.categoryTextBold);
            }

            return (
              <Animatable.View
                key={index}
                delay={index * 120} // delay for each item
                animation="slideInDown" // animation type
              >
                <TouchableOpacity
                  style={styles.categoryButton}
                  onPress={() => setActiveCategory(category)}
                >
                  <Text style={textStyles}>{category}</Text>
                  {isActive && (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Image
                        source={require('../assets/images/line.png')}
                        style={styles.activeLineImage}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </ScrollView>
        {/* food cards */}
        <ScrollView
          contentContainerStyle={styles.foodCardsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {foodItems.map((item, index) => (
            <FoodCard item={item} index={index} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
