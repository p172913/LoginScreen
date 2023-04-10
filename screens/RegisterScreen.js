import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{padding: 25}}>
        <View style={{
          alignItems: 'center',
          paddingTop:50,
          }}
          >
          <Image source={require('../assets/images/registration.jpg')}
            style={{
              height:300,
              width:300,
              borderRadius:150,
             }} 
          />
        </View>

        <Text
          style={{
            //fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.Buttonstyle}
            >
            <Image source={require('../assets/images/google.png')}
            style={styles.ImageStyle} 
             />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.Buttonstyle}>
            <Image source={require('../assets/images/facebook.png')} 
            style={styles.ImageStyle} 
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.Buttonstyle}>
            <Image source={require('../assets/images/twitter.png')} 
            style={styles.ImageStyle} 
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.TextStyle}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

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
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        
        <CustomButton label={'Register'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;


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
    width:24
  },
  TextStyle:{
    textAlign: 'center', 
    color: '#666', 
    marginBottom: 30
  }
});