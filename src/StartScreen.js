import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon, Button } from 'react-native-elements';


const StartScreen = () => {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}> 
              <Text style = {{fontSize: 30, fontWeight: 'bold', alignSelf: 'center', color: 'black', marginTop: '10%'}}>Thinky</Text>

                <View style = {{flex: 2, marginBottom: 10}}>
                    <Card style = {{borderRadius: 40, marginTop: '40%', backgroundColor: '#01021c', padding: 40}}>

                        <Card style = {{borderRadius: 10, backgroundColor: 'grey', width: '80%', height: '45%', alignSelf: 'center', marginTop: '-50%'}}>    
                        </Card>
                            <Text style = {{fontSize:29, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', color: 'white', marginTop: '20%'}}>Grow your insight with inspiring news</Text>
                            <Text style = {{fontSize:13, alignSelf: 'center', textAlign: 'center', color: 'white', marginTop: '10%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>

                            <Animatable.View  animation = "fadeInLeft" delay={1000}>
                                <Button title={'GET STARTED'} titleStyle={{ fontWeight: 'bold', fontSize: 18 }} buttonStyle = {{borderWidth: 0, borderColor: 'transparent', borderRadius: 10}} containerStyle = {{ marginTop: '40%' }} icon={{name: 'arrow-right', type: 'font-awesome', size: 15, color: 'white'}}  onPress={() => navigation.navigate('Account')}/>
                            </Animatable.View>
                    </Card>
                    
                </View>
        </View>
                
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
        marginTop: '20%', 
        alignSelf: 'center'
    }
  });
export default StartScreen;
