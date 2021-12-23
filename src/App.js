import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StartScreen from './StartScreen';
import AccountScreen from './AccountScreen';
import Account from './Account'
import Dashboard from './Dashboard';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  // function TabRoutes() {
  //   return (
        
  //     <Tab.Navigator>
      
  //       <Tab.Screen name="Login" component={LoginScreen} />
  //       <Tab.Screen name="SignUp" component={SignUp} />
  //     </Tab.Navigator>
  //   );
  // }
  const loginState = () =>{
    setIsLoading(true)
  }

  if(loginState.isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView source={require('./18168-stay-safe-stay-home.json')} autoPlay loop duration={5000}/>
      </View>
    )
    }
    return(
      
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
     </NavigationContainer>

     
    )
}
const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

export default App;