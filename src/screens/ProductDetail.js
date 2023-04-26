import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import store from '../Redux/Store';
import {block} from 'react-native-reanimated';
import {ADD_TO_CART} from '../Redux/ActionType';
import {REMOVE_FROM_CART} from '../Redux/ActionType';

const ProductDetail = ({route}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {
    title,
    price,
    description,
    images,
    rating,
    stock,
    brand,
    thumbnail,
    category,
  } = route.params;

  const [img_url, setUrl] = useState(images[0]);

  const addProduct = () => {};

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            height: '100%',
            borderRadius: 20,
          }}>
          <View style={styles.thumbnail}>
            <Image
              source={{uri: img_url}}
              style={{
                width: 400,
                height: '45%',

                borderColor: 'gray',
              }}
            />

            <ScrollView horizontal style={{padding: 10, height: 90}}>
              {images.map(url => (
                <TouchableOpacity
                  key={Math.random(5000 * 23)}
                  onPress={() => setUrl(url)}
                  style={{
                    margin: 5,
                    borderWidth: 2,
                    borderColor: 'white',
                    resizeMode: 'contain',
                    justifyContent: 'center',
                    height: 80,
                    width: 80,
                    backgroundColor: 'white',
                  }}>
                  <Image
                    source={{uri: url}}
                    style={{width: 75, height: 70}}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Image source={{uri: setUrl}} />

            <View style={styles.container}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                {' '}
                {title}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '500',
                  marginLeft: 10,
                }}>
                {' '}
                {brand}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginLeft: 14,
                  marginTop: 5,
                }}>
                Rating: {rating}*
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={rating}
                  fullStarColor={'#FFD700'}
                  starSize={13}
                />
              </Text>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 20,
                  marginLeft: 14,
                  marginTop: 5,
                }}>
                Price: ${price}
              </Text>

              <Button
                title="Go To Cart"
                onPress={() => {
                  navigation.navigate('Cart');
                }}></Button>

              {/* <Button
                title="Add My Cart"
                onPress={() => {
                  dispatch({type: ADD_TO_CART});
                  navigation.navigate('Cart');
                }}></Button>

              <Button
                title="Remove My Cart"
                color={'black'}
                onPress={() => {
                  dispatch({type: REMOVE_FROM_CART});
                  navigation.navigate('Cart');
                }}></Button>
 */}
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 15,
                }}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
});
