import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const CompButton = ({onPress, name}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4960F9', '#3AF9EF']} style={styles.buton}>
        <TouchableOpacity style={styles.buttonone} onPress={onPress}>
          <Text style={styles.but}>{name ? name : 'Button'} </Text>
          <AntDesign name="right" size={30} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonone: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: '80%',
  },
  buton: {
    marginTop: 40,
    marginLeft: 40,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    height: 70,
  },

  but: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CompButton;
// <View style={styles.buttonone}>
//   <Text style={styles.textStyle}> </Text>
//   <Button
//     title="Signup"
//     color="black"
//     type="outline"
//     onPress={() => {
//       Alert.alert('signup button pressed');
//     }}
//   />
// </View>
