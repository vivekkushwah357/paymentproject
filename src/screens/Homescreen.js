import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CompButton from '../components/CompButton';
import {useState, useEffect} from 'react';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => setData(json.products))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.toplayout}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <AntDesign
                name="bars"
                size={30}
                color="white"
                marginLeft={20}
                onPress={() => navigation.toggleDrawer()}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.time}>9:41</Text>
        </View>

        <View style={styles.image}>
          <Image
            source={require('../images/ProfileImage.png')}
            style={{
              height: 80,
              width: 100,
              marginLeft: 300,
              bottom: 30,
            }}
          />
        </View>

        <View style={styles.gm}>
          <Text style={styles.gm}>Good morning Swajan,</Text>
        </View>
      </View>

      <View style={styles.containerone}>
        <>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProductDetail', {
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    images: item.images,
                    rating: item.rating,
                    stock: item.stock,
                    brand: item.brand,
                    thumbnail: item.thumbnail,
                  });
                }}>
                <View style={styles.apitext}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={{
                      height: 120,
                      width: 220,
                      marginTop: 8,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 200,
                        fontWeight: 'bold',
                        color: 'black',
                        marginRight: 160,
                        marginLeft: 150,
                        marginTop: 5,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.bookmark}>
                    <Icon
                      name="bookmark-o"
                      size={20}
                      color="#900"
                      bottom={30}
                      marginLeft={80}
                    />
                  </View>

                  <View style={styles.star}>
                    <Text
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        fontWeight: 'bold',
                        color: 'black',
                        marginLeft: 25,
                      }}>
                      Rating
                    </Text>

                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={item.rating}
                      fullStarColor={'#FFD700'}
                      starSize={13}
                    />
                  </View>

                  <Text
                    style={{
                      marginRight: 140,
                      fontWeight: 'bold',
                      color: 'black',
                      display: 'flex',
                    }}>
                    Price: {item.price}$
                  </Text>

                  <Text
                    style={{
                      marginRight: 60,
                      fontWeight: 'bold',
                      color: 'black',
                      display: 'flex',
                      width: 150,
                    }}>
                    Discount:{item.discountPercentage}% off
                  </Text>

                  {/* <Text>{item.description}</Text> */}
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      </View>
    </>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0.4,
    backgroundColor: '#1937FE',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },

  bookmark: {
    marginLeft: 100,
  },

  time: {
    color: 'white',
    fontWeight: 800,
    marginLeft: 20,
  },

  icon: {
    marginTop: 20,
    Left: 50,
  },

  gm: {
    width: 180,
    color: 'white',
    bottom: 50,
    marginLeft: 30,
    fontSize: 25,
  },
  containerone: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    width: 280,
    marginLeft: 62,

    borderRadius: 20,
  },

  apitext: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 250,
    height: 281,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#F0EAEA',
    marginLeft: 15,
    alignItems: 'center',
  },

  star: {
    marginRight: 161,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
});
