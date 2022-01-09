import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput, ActivityIndicator, Drawer, Colors, Searchbar } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import { Icon} from 'react-native-elements';
import News from './News';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const Dashboard = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [active, setActive] = React.useState('');
    const [isLoading, setLoading] = useState(true);

  const onChangeSearch = query => setSearchQuery(query);
      
        const updateSearch = (search) => {
          setSearch(search);
        };

    return (
        
        <LinearGradient colors={['#daf7f2', '#9acbfc', '#47a2fc']} style={{flex: 1}}>
        <View style = {{flex: 1}}>
            <Animatable.View style = {{ width: '100%', height: '30%', padding: 30}} animation = "fadeInUp" delay={1000}>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{flexDirection: 'column', width: '50%'}}>
                        <Text style = {{marginLeft: '2%'}}>Hi David!</Text>
                        <Text style = {{marginLeft: '2%', fontSize: 20, fontWeight: 'bold', color: 'black'}}>Explore today's world news</Text>
                    </View>
                    <Icon name = 'menu' size = {40} style = {{marginLeft: '50%'}}>
                        <Drawer.Section title="Some title">
                            <Drawer.Item
                            label="First Item"
                            active={active === 'first'}
                            onPress={() => setActive('first')}
                            />
                            <Drawer.Item
                            label="Second Item"
                            active={active === 'second'}
                            onPress={() => setActive('second')}
                            />
                        </Drawer.Section>
                    </Icon>
                </View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style = {{marginTop :'10%', borderRadius: 20}}
                />
            </Animatable.View>

            <Animatable.View style = {styles.container}  animation = "fadeInUp" delay={1500}>
            <LinearGradient colors={['#fcdfbb', '#fcbf6a', '#fc6a76', '#fc4e5f']} style = {styles.Card}>
                
                    <News />
                
            </LinearGradient>
            </Animatable.View>
        </View>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      paddingBottom: '10%',
      height: '100%',
      padding: 10
    },
    Card: {
        backgroundColor: '#f5dcf7',
        height: '100%',
        borderRadius: 20,
        shadowOffset: { width: 10, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation:15,
        borderWidth:1,
        borderColor:'grey',
        shadowColor: '#0a0001',
        }
  });
export default Dashboard;
