import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { AuthContext } from './context';
import RootStackScreen from './RootStackScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StartScreen from './StartScreen';

import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImagePicker from './ImagePicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// function TabRoutes() {

//   // const isFocused = useIsFocused();
  
//     return (
//         <View style = {styles.container}>
//         <Animatable.Text 
//         style = {{
//                 fontSize: 30, 
//                 fontWeight: 'bold', 
//                 alignSelf: 'center', 
//                 color: 'black', 
//                 marginTop: '20%',
//                 marginBottom:'3%',
//                 }} 
          
//           animation = "bounceIn" delay={500}>People Polly</Animatable.Text>
//           <Tab.Navigator 
//                   screenOptions={{ 
//                   tabBarIndicatorStyle: {backgroundColor: '#01021c',},
//                   // swipeEnabled: (false), 
//                   tabBarActiveTintColor: '#fff',
//                   tabBarInactiveTintColor: 'gray',
//                   tabBarStyle: { backgroundColor: '#01021c', height:50,}, 
//                   tabBarLabelStyle: { fontSize: 15, fontWeight:'bold', letterSpacing:2}, 
//                   gestureEnabled: false,
//                   }} 
//           style = {{
//                   borderTopLeftRadius: 40, 
//                   borderTopRightRadius: 40,
//                   borderBottomStartRadius:40,
//                   borderBottomEndRadius:40,
//                   // color:'red'
//                   }}>
          
//           <Tab.Screen name="Login" component={LoginScreen}/>
//           <Tab.Screen name="SignUp" component={SignUp} />
//           </Tab.Navigator>
//       </View>
//     );
//   };


const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      // case 'LOGOUT': 
      //   return {
      //     ...prevState,
      //     userName: null,
      //     userToken: null,
      //     isLoading: false,
      //   };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(()=> ({
    logIn: async(userName, password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const navigation = useNavigation();
      let userToken;
      userToken = null;
      if(userName == 'user' && password == 'pass'){
        try {
          userToken = 'fvghfvhyf';
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e);
          
        }
        
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
      
    },
    // signOut: async() => {
    //   // setUserToken(null);
    //   // setIsLoading(false);
    //   try {
    //     await AsyncStorage.removeItem('userToken');
    //   } catch(e) {
    //     console.log(e);
    //   }
    //   dispatch({ type: 'LOGOUT' });
    // },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    // toggleTheme: () => {
    //   setIsDarkTheme( isDarkTheme => !isDarkTheme );
    // }
  }), []);
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'hfbh' });
    }, 3000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView source={require('./29447-global-mobile-news-network.json')} autoPlay loop duration={2000}/>
      </View>
    )
    }
    return(
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
        { loginState.userToken !== null ? (
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'StartScreen'}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          
            </Stack.Navigator>
        )
        :
        <RootStackScreen/>
        }
      </NavigationContainer>
     </AuthContext.Provider>
     
    )
}
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
// const DrawerTab = createDrawerNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f6',
    padding: 10,
  },
  
});

export default App;