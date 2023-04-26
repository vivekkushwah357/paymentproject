import * as React from 'react';
import { StyleSheet,View,Text} from 'react-native'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Payment from './src/screens/Payment';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Splashscreen from './src/Splashscreen';
import Otp from './src/screens/Otp';
import OtpVerify from './src/screens/OtpVerify';
import Homepage from './src/screens/Homepage';
import Profile from './src/screens/Profile';
import HomeUI from './src/screens/HomeUI';
import Homescreen from './src/screens/Homescreen';
import Pay from './src/components/Pay';
import Flat from './src/screens/Flat';
import ProductDetail from './src/screens/ProductDetail';
import Drawermenu from "./src/screens/Drawermenu";
import { Provider } from 'react-redux';
import store from './src/Redux/Store';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './src/screens/Cart';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>

    <Stack.Navigator>
   
      <Stack.Screen name="Splash" component={Splashscreen} />
       <Stack.Screen name="Home" component={Home} />  
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />  
      <Stack.Screen name="Homepage" component={Homepage} options={{headerShown:false}} />    
      <Stack.Screen name="Profile" component={Profile} /> 
      <Stack.Screen name="HomeUI" component={HomeUI} />    
      <Stack.Screen name="Homescreen" component={Homescreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="Flat" component={Flat} />
      <Stack.Screen name="Drawer" component={Drawermenu} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart}/>

    

    </Stack.Navigator>

      </NavigationContainer>
      </Provider>

  );
}

export default App

