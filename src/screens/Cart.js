import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../Redux/ActionType';
import {REMOVE_FROM_CART} from '../Redux/ActionType';

const Cart = ({route}) => {
  const navigation = useNavigation();
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  console.log(count, 'aman is good boy');

  return (
    <>
      <Text style={{fontSize: 50, color: 'blue', marginTop: 10}}>
        My Cart Value is{' '}
      </Text>

      <Button
        title="Add My Cart"
        onPress={() => {
          dispatch({type: ADD_TO_CART});
        }}></Button>

      <Text
        style={{
          fontSize: 100,
          marginLeft: 150,
        }}>
        {count}
      </Text>

      <Button
        title="Remove My Cart"
        color={'black'}
        onPress={() => {
          dispatch({type: REMOVE_FROM_CART});
        }}></Button>

      <View></View>

      {/* <View>
        <FlatList
          data={cartItems}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />

        <Text>{{title}}</Text>
        <Text>{{price}}</Text>
        <Text>{{images}}</Text>
      </View> */}
    </>
  );
};

export default Cart;
