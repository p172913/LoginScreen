import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useState
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

//import LoginSVG from '../assets/images/login.png'
//import GoogleSVG from '../assets/images/google.png';
//import FacebookSVG from '../assets/images/facebook.png';
//import TwitterSVG from '../assets/images/twitter.png';


const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{padding: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../assets/images/login.png')}
            style={{
              height:200,
              width:200,
              borderRadius:100 
             }} 
          />
        </View>
        <Text
          style={styles.LoginButtonStyle}>
          Login
        </Text>
        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {}} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() =>{}}
            style={styles.Buttonstyle}
          >
            < Image source={require('../assets/images/google.png')}
            style={styles.ImageStyle} 
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>{}}
            style={styles.Buttonstyle}
          >
            <Image source={require('../assets/images/facebook.png')}
            style={styles.ImageStyle}  
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>{}}
            style={styles.Buttonstyle}
          >
            <Image source={require('../assets/images/twitter.png')}
            style={styles.ImageStyle} 
            />
          </TouchableOpacity>
        </View>

        <View
          style={styles.NavigateButton}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Buttonstyle:{
  borderColor: '#ddd',            
  borderWidth: 2,
  borderRadius: 24,
  paddingHorizontal: 10,
  paddingVertical: 10,
  },
  ImageStyle:{
    height:24,
    width:24,
    borderRadius:12
  },
  NavigateButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  LoginButtonStyle:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  }

});