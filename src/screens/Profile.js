import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CompButton from '../components/CompButton';

const Profile = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.full}>
      <View style={styles.image}>
        <Image
          source={require('../images/Profile.png')}
          style={{
            position: 'absolute',
            width: 150,
            height: 150,
            marginLeft: 110,
            marginTop: 40,
          }}
        />
        <View style={styles.form}>
          <View style={styles.use}>
            <Text style={styles.user}> UserName</Text>
            <TextInput
              style={styles.place}
              placeholder=" Your UserName"></TextInput>
          </View>

          <View style={styles.formfirst}>
            <Text style={styles.user}>First Name</Text>
            <TextInput
              style={styles.place}
              placeholder="Your First Name"></TextInput>
          </View>

          <View style={styles.formlast}>
            <Text style={styles.user}> Last Name</Text>
            <TextInput
              style={styles.place}
              placeholder=" Your Last Name"></TextInput>
          </View>

          <View style={styles.formdate}>
            <Text style={styles.user}>Date Of Birth</Text>

            <TextInput
              style={styles.place}
              placeholder="Your birth-date (dd-mm-yy)"></TextInput>
            <CompButton
              onPress={() => navigation.navigate('Homepage')}
              name={'Submit'}
            />
          </View>
        </View>
        <View styles={{bottom: 100}}></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  full: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#4960F9',
  },

  formfirst: {
    marginTop: 30,
  },

  formlast: {
    marginTop: 30,
  },

  formdate: {
    marginTop: 30,
  },
  form: {
    margin: 30,
    marginTop: 200,
  },

  user: {
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
  },

  place: {
    borderBottomColor: '#ccc',
    marginTop: 5,
    marginLeft: 5,
    borderBottomWidth: 2,
    paddingBottom: 2,
    width: 325,
  },
});
