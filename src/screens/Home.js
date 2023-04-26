import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import CompButton from '../components/CompButton';
import DrawerMenu from './Drawermenu';

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.header}>
      <Image
        source={require('../images/Ellipse3.png')}
        style={{position: 'absolute', width: 400, height: 500}}
      />
      <Image
        source={require('../images/Ellipse2.png')}
        style={{position: 'absolute', width: 300, height: 500}}
      />
      <Image
        source={require('../images/Ellipse1.png')}
        style={{width: 280, height: 400, bottom: 68}}
      />
      <Image
        source={require('../images/Splash.png')}
        style={{width: 50, height: 50, bottom: 350, marginLeft: 60}}
      />
      <Image
        source={require('../images/welcome.png')}
        style={{width: 120, height: 50, bottom: 330, marginLeft: 40}}
      />
      {/* <TouchableOpacity style={styles.loginBtn}>
        <LinearGradient colors={['#4960F9', '#3AF9EF']}>
          <Text> LOGIN </Text>
        </LinearGradient>
      </TouchableOpacity> */}
      <CompButton
        onPress={() => navigation.navigate('Login')}
        name={'Sign in'}
      />
      <CompButton
        onPress={() => navigation.navigate('Homepage')}
        name={'New User Sign'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 40,
  },
});
