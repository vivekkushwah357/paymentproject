import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {StyleSheet, Text, TextInput, View, Image} from 'react-native';

import CompButton from '../components/CompButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles}>
      <Image
        source={require('../images/Elli3.png')}
        style={{position: 'absolute', width: 420, height: 350}}
      />
      <Image
        source={require('../images/Elli2.png')}
        style={{position: 'absolute', width: 330, height: 320}}
      />
      <Image
        source={require('../images/Elli1.png')}
        style={{width: 280, height: 270}}
      />
      <Image
        source={require('../images/Splash.png')}
        style={{width: 50, height: 50, bottom: 230, marginLeft: 80}}
      />
      <Image
        source={require('../images/welcome.png')}
        style={{width: '25%', height: 40, bottom: 220, marginLeft: 60}}
      />
      <View style={styles.login}>
        <Text style={styles.loggin}>Sign in</Text>
      </View>

      <View style={styles.form}>
        <TextInput placeholder="Email ID"></TextInput>
        <AntDesign
          name="down-square-o"
          size={15}
          color="black"
          marginTop={20}
        />
      </View>

      <View style={styles.formpass}>
        <TextInput placeholder="Password"></TextInput>
        <AntDesign name="eye" size={15} color="black" marginTop={20} />
      </View>

      <View style={styles.formforgot}>
        <Text>Forgot Password</Text>
      </View>

      <CompButton onPress={() => navigation.navigate('Otp')} name={'Submit'} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loggin: {
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 30,
    color: 'black',
  },

  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    marginTop: 15,
    marginLeft: 40,
    borderBottomWidth: 2,
    paddingBottom: 1,
    width: 300,
  },

  formpass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    paddingBottom: 1,
    marginTop: 30,
    marginLeft: 40,
    width: 300,
  },

  formforgot: {
    marginTop: 25,
    marginLeft: 40,
    textDecorationLine: 'underline',
    fontFamily: 'SF PRO TEXT',
    color: '#8000ff',
  },
});
