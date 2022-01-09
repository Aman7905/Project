import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const BookmarkScreen = () => {

    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    return (
        <div>
            
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#01021c',
     
    },
    Touch: {
        width : '50%',
        alignItems: 'center',
        marginTop: '5%'
    }
  });
export default BookmarkScreen;
