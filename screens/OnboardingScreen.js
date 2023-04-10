import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
    style={styles.Screenstyle}
      >
      <View style={{marginTop: 20}}>
        <Text
          style={styles.TextStyle}>
          Let get into LOGIN page
        </Text>
      </View>
      <TouchableOpacity
        style={styles.LoginStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={styles.Logintextstyle}
        >
          START
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  Buttonstyle:{
  borderColor: '#ddd',            
  borderWidth: 2,
  borderRadius: 10,
  paddingHorizontal: 30,
  paddingVertical: 10,
  },
  LoginStyle:{
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Screenstyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Logintextstyle:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextStyle:{
    fontWeight: 'bold',
    fontSize: 30,
    color: '#20315f',
  }
});