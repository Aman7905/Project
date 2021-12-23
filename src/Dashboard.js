import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput, ActivityIndicator, Colors, Searchbar } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import { Icon} from 'react-native-elements';



const Dashboard = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
      
        const updateSearch = (search) => {
          setSearch(search);
        };
    return (
        
        <ScrollView style = {styles.container}>
            <Animatable.View style = {{backgroundColor: '#ffd9f7', width: '100%', height: '100%', padding: 30}} animation = "fadeInUp" delay={1000}>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{flexDirection: 'column', width: '50%'}}>
                        <Text style = {{marginLeft: '2%'}}>Hi David!</Text>
                        <Text style = {{marginLeft: '2%', fontSize: 20, fontWeight: 'bold', color: 'black'}}>Explore today's world news</Text>
                    </View>
                    <Icon name = 'menu' size = {40} style = {{marginLeft: '50%'}}/>
                </View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style = {{marginTop :'10%', borderRadius: 20}}
                />
            </Animatable.View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    
  });
export default Dashboard;
