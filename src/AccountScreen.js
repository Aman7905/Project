import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const FirstRoute = () => (
    <View style={{ flex: 1, borderRadius: 40, backgroundColor: 'white'}}>
        <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '5%', marginLeft: '5%' }}>Welcome Back</Text>

        <Text style = {{fontSize: 20, marginTop: '10%', marginLeft: '5%', color: 'black'  }}>Sign in with your account</Text>

        <View style = {{padding: 15}}>
            <Text style = {{fontSize: 15, marginTop: '10%', marginBottom: 10}}>Username</Text>
            <TextInput
                                placeholder='email@address.com'
                                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                // value = {Omni_Store_Email_ID} onChangeText = {(text) => setOmni_Store_Email_ID(text)}
                                />
        </View>

        <View style = {{padding: 15}}>
            <Text style = {{fontSize: 15, marginTop: '5%', marginBottom: 10}}>Password</Text>
            <TextInput
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                // value = {Omni_Store_Password} onChangeText = {(text) => setOmni_Store_Password(text)}
                secureTextEntry={true}
             />
        </View>

        <View style ={{alignItems: 'center', marginTop: '5%'}}>
            <TouchableOpacity>
                <Card style ={{paddingLeft: 80, paddingRight: 80, paddingTop: 10, paddingBottom: 10, borderRadius: 10, alignItems: 'center', backgroundColor: '#5a2dfc'}}>
                    <Text  style ={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
                </Card>
            </TouchableOpacity>
        </View>
        
        <View style ={{marginTop: '10%', flexDirection: 'row', marginLeft: '20%'}}>
            <Text style = {{fontSize: 15, marginTop: '10%', color:'black'}}>Forgot your password?</Text>
            <TouchableOpacity>
                <Text style = {{fontSize: 15, marginTop: '42%', color:'blue'}}>Reset here</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 40}}>
        <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '5%', marginLeft: '5%' }}>Create account</Text>

        <Text style = {{fontSize: 16, marginTop: '5%', marginLeft: '5%', color: 'black' }}>Fill form below to register your account</Text>

        <View style = {{padding: 15}}>
            <Text style = {{fontSize: 15, marginTop: '3%', marginBottom: 10}}>Full Name</Text>
            <TextInput
                                placeholder='Name'
                                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                // value = {Omni_Store_Email_ID} onChangeText = {(text) => setOmni_Store_Email_ID(text)}
                                />
        </View>

        <View style = {{padding: 15}}>
            <Text style = {{fontSize: 15, marginBottom: 10}}>Email Address</Text>
            <TextInput
                                placeholder='email@address.com'
                                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                // value = {Omni_Store_Email_ID} onChangeText = {(text) => setOmni_Store_Email_ID(text)}
                                />
        </View>

        <View style = {{padding: 15}}>
            <Text style = {{fontSize: 15, marginBottom: 10}}>Password</Text>
            <TextInput
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                // value = {Omni_Store_Password} onChangeText = {(text) => setOmni_Store_Password(text)}
                secureTextEntry={true}
             />
        </View>

        <View style ={{alignItems: 'center'}}>
            <TouchableOpacity>
                <Card style ={{paddingLeft: 80, paddingRight: 80, paddingTop: 10, paddingBottom: 10, borderRadius: 10, alignItems: 'center', backgroundColor: '#5a2dfc'}}>
                    <Text  style ={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>REGISTER</Text>
                </Card>
            </TouchableOpacity>
        </View>
        
        <View style ={{marginTop: '15%', flexDirection: 'row', marginLeft: '5%'}}>
            <Text style = {{fontSize: 15, marginTop: '10%'}}>By tap Register button you accept terms and privacy this app</Text>
            
        </View>

    </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

const AccountScreen = () => {
    const navigation = useNavigation();
    // const Tab = createMaterialTopTabNavigator();
    const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Login' },
    { key: 'second', title: 'SignUp' },
    
  ]);
    return (
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style = {{paddingLeft: 20, paddingRight: 20, paddingTop: 120, paddingBottom: 20, backgroundColor: '#dce7f7'}}
    />
  );
}


export default AccountScreen;
