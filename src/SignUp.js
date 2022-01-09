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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthContext } from './context';

const SignUp = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const { signUp } = React.useContext(AuthContext);
    return (
        <SafeAreaProvider>
        <View style = {styles.container}>
        <ScrollView>
        <Animatable.View style ={{flex: 3, width: '100%'}} animation = "fadeInDown" delay={1500}>
                <Card style ={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
                    <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '5%', marginLeft: '5%' }}>Create account</Text>

                    <Text style = {{fontSize: 20, marginTop: '8%', marginLeft: '5%', color: 'black'  }}>Fill form below to register your account</Text>

                    <View style = {{padding: 15}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Full name</Text>
                        <Input
                            placeholder='Full name'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                        />
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Email Address</Text>
                        <Input
                            placeholder='email@address.com'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        />
                        
                    </View>
                    
                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Password</Text>
                        <Input
                            placeholder='Password'
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            // value = {Omni_Store_Password} onChangeText = {(text) => setOmni_Store_Password(text)}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style = {{alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {signUp()}}>
                            <Card style ={{width: '90%', paddingTop: 10, paddingBottom: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 10, alignItems: 'center', backgroundColor: '#5a2dfc'}}>
                                <Text style ={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>REGISTER</Text>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <Animatable.View style ={{flexDirection: 'row', marginTop: 15, alignSelf: 'center', marginBottom: '30%', paddingLeft: 30, paddingRight: 30,}} animation = "bounceIn" delay={2000}>
                        <Text style = {{fontSize: 15, textAlign: 'center' }}>By tap Register button you accept terms and privacy this app</Text>
                            
                    </Animatable.View>
                </Card>
            </Animatable.View>
            </ScrollView>
        </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#01021c',
    //  padding:-20
     
    },
    Touch: {
        width : '50%',
        alignItems: 'center',
        marginTop: '5%'
    }
  });
export default SignUp;
