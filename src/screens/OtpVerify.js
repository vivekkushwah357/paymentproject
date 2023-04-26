import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CompButton from '../components/CompButton';

const OtpVerify = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <View style={styles.full}>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              source={require('../images/OTP10.png')}
              style={{
                position: 'absolute',
                width: 200,
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
          <View style={styles.containerone}>
            <Text style={styles.op}> OTP Verification</Text>
            <Text style={styles.para}>
              {' '}
              We will send you a one-time password to this mobile number.
            </Text>
          </View>
        </View>
        <View style={styles.free}>
          <OTPInputView
            style={{width: '80%', height: 200}}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <View style={styles.nav}>
          <CompButton
            onPress={() => navigation.navigate('Profile')}
            name={'Submit'}
          />
        </View>
      </View>
    </>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  full: {
    marginBottom: 680,
  },

  img: {
    width: '100%',
    height: '55%',
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
    marginTop: 30,
  },

  para: {
    width: 290,
    textAlign: 'center',
    marginLeft: 50,
    fontSize: 20,
    fontFamily: 'Montserrat',
    marginTop: 30,
  },

  borderStyleBase: {
    width: 50,
    height: 45,
    marginLeft: 20,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 30,
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
    marginLeft: 80,
  },

  nav: {},
});
