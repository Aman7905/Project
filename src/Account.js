import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Account = () => {
    const navigation = useNavigation();
    const [isFetched, setisFetched] = useState(true);
    const [Linear, setLinear] = useState(true);
    return (
        <SafeAreaProvider>
        <View style = {styles.container}>
        <ShimmerPlaceHolder visible={isFetched} LinearGradient={Linear}>
                <Animatable.Text style = {{fontSize: 30, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center', color: 'black', marginTop: '10%'}} animation = "bounceIn" delay={500}>Thinky</Animatable.Text>
            <Animatable.View style = {{flex: 2, width: '100%', backgroundColor: '#01021c', borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: '20%'}} animation = "fadeInUp" delay={1000}>
                <Animatable.View style = {{ width: '100%', flexDirection: 'row', alignItems: 'center'}} animation = "fadeInLeft" delay={1500}>

                    <TouchableOpacity style = {styles.Touch}>  
                            <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.Touch}>
                    <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>SIGNUP</Text>
                </TouchableOpacity>
                    
                </Animatable.View>
            </Animatable.View>
            <Animatable.View style ={{flex: 3, width: '100%', marginTop: '-80%'}} animation = "fadeInDown" delay={1500}>
                <Card style ={{borderTopLeftRadius: 40, borderTopRightRadius: 40,}}>
                    <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '5%', marginLeft: '5%' }}>Welcome Back</Text>

                    <Text style = {{fontSize: 20, marginTop: '8%', marginLeft: '5%', color: 'black'  }}>Sign in with your account</Text>

                    <View style = {{padding: 15}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Username</Text>
                        <Input
                            placeholder='email@address.com'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        />
                        
                    </View>

                    <View style = {{padding: 15}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Password</Text>
                        <Input
                            placeholder='Password'
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            // value = {Omni_Store_Password} onChangeText = {(text) => setOmni_Store_Password(text)}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style = {{alignItems: 'center'}}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Dashboard')}>
                            <Card style ={{width: '50%', paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 10, alignItems: 'center', backgroundColor: '#5a2dfc'}}>
                                <Text style ={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <Animatable.View style ={{flexDirection: 'row', marginTop: 15, alignSelf: 'center', marginBottom: '30%'}} animation = "bounceIn" delay={2000}>
                        <Text style = {{fontSize: 15}}>Forgot your password?</Text>
                            <TouchableOpacity>
                                <Text style = {{fontSize: 15, color: 'blue'}}>Reset here</Text>
                            </TouchableOpacity>
                    </Animatable.View>
                </Card>
            </Animatable.View>
            </ShimmerPlaceHolder>
        </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff2fa',
     padding: 10
    },
    Touch: {
        width : '50%',
        alignItems: 'center',
        marginTop: '5%'
    }
  });
  
export default Account;
