import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CompButton from '../components/CompButton';

const Otp = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.full}>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            source={require('../images/OTP10.png')}
            style={{
              position: 'absolute',
              width: 250,
              height: 250,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
      </View>
      <View style={styles.containerone}>
        <Text style={styles.op}> OTP Verification</Text>
        <Text style={styles.para}>
          {' '}
          We will send you a one-time password to this mobile number{' '}
        </Text>

        <View style={styles}>
          <Text style={styles.mob}> Enter a Mobile Number</Text>
          <TextInput style={styles.phone}></TextInput>
        </View>
      </View>
      <CompButton
        onPress={h => navigation.navigate('OtpVerify')}
        name={'Get OTP'}
      />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },

  img: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  op: {
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 28,
  },

  para: {
    width: 290,
    textAlign: 'center',
    marginLeft: 50,
    fontSize: 20,
    fontFamily: 'Montserrat',
    marginTop: 20,
  },

  mob: {
    textAlign: 'center',
    marginTop: 30,
  },

  phone: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    width: 300,
    marginLeft: 50,
  },
});
