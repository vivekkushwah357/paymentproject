import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

const Notification = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://thapatechnical.github.io/userapi/users.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default Notification;
//-----------------------------------------------------------------------------------------------------------------------//
// import {StyleSheet, Text, View, FlatList} from 'react-native';
// import React, {useState} from 'react';
// import {useEffect} from 'react';

// const Notification = () => {
//   const [data, setData] = useState([]);
//   const getUserData = async () => {
//     const url = 'https://thapatechnical.github.io/userapi/users.json';
//     let result = await fetch(url);
//     result = await result.json();
//     then(response => response.json());
//     then(result => setData(result)).catch(error => {
//       console.error(error);
//     });
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   <FlatList
//     data={data}
//     keyExtractor={item => item.id}
//     renderItem={({item}) => (
//       <View>
//         <Text>{item.description}</Text>
//       </View>
//     )}
//   />;

// const renderItem = ({item}) => {
//   console.log(item.email);
// };
// return (
//   <View>
//     <Text>Hi API CALL KRDE AMAN</Text>
//     <Text> {data.email} </Text>
//   </View>
// );
// };

// const styles = StyleSheet.create({});
//export default Notification;

//-----------------------------------------------------Flatlist-----------------------//

// const Notification = () => {
//   const names = [
//     {name: 'vivek'},
//     {name: 'arup'},
//     {name: 'aditya'},
//     {name: 'abhishek'},
//     {name: 'rahul'},
//   ];
//   return (
//     <FlatList
//       data={names}
//       renderItem={element => {
//         console.log(element, 'wkl');
//         return <Text style={styles.aman}> {element.item.name} </Text>;
//       }}
//     />
//   );
// };
// export default Notification;
// const styles = StyleSheet.create({
//   aman: {
//     fontSize: 28,
//   },
// });

//------------------api----------------------//
// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     // process the data
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   //And in the flatlist:
//   export default Notification()
//   <FlatList
//   data={places}
//   renderItem={({ item }) => (
//   <Text>{item.title}</Text>
//   )}
