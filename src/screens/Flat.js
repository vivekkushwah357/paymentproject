import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Flat = () => {
  const names = [
    {name: 'vivek'},
    {name: 'arup'},
    {name: 'aditya'},
    {name: 'abhishek'},
    {name: 'rahul'},
  ];
  return (
    <FlatList
      data={names}
      renderItem={element => {
        console.log(element);
        // return <Text> {element.item.names} </Text>;
      }}
    />
  );
};

export default Flat;
const styles = StyleSheet.create({});
