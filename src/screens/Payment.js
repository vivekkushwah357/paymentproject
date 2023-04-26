import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomNavigation from '../components/BottomNavigation';

const Payment = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.bottom}>
            <Text style={styles.bottom}></Text>
          </View>

          <View style={styles.bottomend}>
            <Text style={styles.bottomend}></Text>
          </View>

          <View style={styles.search}>
            <BottomNavigation />
          </View>
        </View>
      </View>

      <View style={styles.center}>
        <View style={styles.rowone}>
          <Text style={styles.one}>Track Your Expenses</Text>
        </View>

        <View style={styles.containerone}>
          <Text style={styles.travel}>TRAVEL</Text>
          <Text style={styles.travel2}>$399</Text>
        </View>

        <View style={styles.containertwo}>
          <Text style={styles.two}>SHOPPING</Text>
          <Text style={styles.two2}>$375</Text>
        </View>

        <View style={styles.rowone}>
          <View style={styles.containerthree}>
            <Text style={styles.sport}>SPORTS</Text>
            <Text style={styles.sport2}>$199.8</Text>
          </View>

          <View style={styles.containerfour}>
            <Text style={styles.medicine}>MEDICINE</Text>
            <Text style={styles.medicine2}>$89.50</Text>
          </View>
        </View>

        <View style={styles.containerfive}>
          <Text style={styles.credit}>Credit Card Payment</Text>
        </View>
      </View>

      <View style={[styles.box2, StyleSheet.absoluteFill]}>
        <View style={styles.textmoney}>
          <Text style={styles.textmoney}>$1063.30</Text>
        </View>
        <View style={styles.expense}>
          <Text style={styles.expense}>Your Total Expense</Text>
        </View>

        <View style={styles.transac}>
          <Text style={styles.transac}>Transaction</Text>
        </View>

        <View style={styles.time}>
          <Text style={styles.time}>12:54</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    top: 650,
    width: 395,
    height: 10,
    flex: 0.5,

    backgroundColor: '#4960F9',
    borderWidth: 2,
    borderColor: '#87F0FF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },

  rowone: {},

  box2: {
    width: 390,
    height: 225,
    flex: 0.3,
    backgroundColor: '#4960F9',
    borderWidth: 2,
    borderColor: '#87F0FF',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  // money:{

  //   color:'white
  //},

  textmoney: {
    color: 'white',
    fontSize: 28,
    top: 80,
    marginLeft: 65,
  },

  expense: {
    color: '#87F0FF',
    top: 40,
    marginLeft: 40,
    fontSize: 25,
    width: 216,
  },

  transac: {
    color: 'white',
    fontSize: 20,
    marginLeft: 70,
    fontWeight: '700',
  },

  time: {
    color: 'white',
    bottom: 40,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '700',
  },

  bottom: {},

  search: {
    color: 'white',
    width: '100%',
    marginBottom: 40,
  },

  // bottomend: {},
  // center: {
  //   flex: 0.6,
  //   backgroundColor: 'white',
  //   bottom: 280,
  // },

  one: {
    color: '#3A3A3A',

    fontSize: 22,
    top: 20,
    left: 40,
  },

  containerone: {
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: '#F78C8C',
    height: 100,
    width: '40%',
    borderRadius: 25,
  },

  travel: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '700',
  },

  travel2: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 40,
    fontWeight: '700',
  },

  containertwo: {
    bottom: 100,
    marginLeft: 200,
    width: 150,
    backgroundColor: '#F6C57A',
    height: 100,
    borderRadius: 25,
  },

  two: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '700',
  },

  two2: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 40,
    fontWeight: '700',
  },

  containerthree: {
    bottom: 70,
    marginTop: 0,
    marginLeft: 20,
    backgroundColor: '#F78C8C',
    height: 100,
    width: '40%',
    borderRadius: 25,
  },

  sport: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '700',
  },

  sport2: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 40,
    fontWeight: '700',
  },

  containerfour: {
    bottom: 170,
    marginLeft: 200,
    width: '40%',
    backgroundColor: '#F6C57A',
    height: 100,
    borderRadius: 25,
  },

  medicine: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '700',
  },

  medicine2: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 30,
    fontWeight: '700',
  },

  containerfive: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 150,
    marginLeft: 20,
    backgroundColor: '#F78C8C',
    height: 100,
    width: '85%',
    borderRadius: 25,
  },

  credit: {
    fontSize: 25,
  },
});

export default Payment;
