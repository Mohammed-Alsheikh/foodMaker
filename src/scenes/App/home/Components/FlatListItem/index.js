import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import {KFC} from '@constants';
import styles from './styles';
import {Container} from 'native-base';

const _default = ({}) => {
  const [image, setImage] = useState([{id: '1'}, {id: '2'}, {id: '3'}]);
  return (
    <View>
      <View style={{marginVertical: 8}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 4,
            marginHorizontal: 14,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.foodName}>{'Classic'}</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.viewAll}>{'View All'}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={image}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{
                  paddingVertical: 140,
                  paddingHorizontal: 124,
                  marginLeft: 12,
                  marginRight: 4,
                  borderRadius: 16,
                }}
                source={KFC}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{marginVertical: 8}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 4,
            marginHorizontal: 14,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.foodName}>{'Food Maker'}</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.viewAll}>{'View All'}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={image}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{
                  paddingVertical: 140,
                  paddingHorizontal: 124,
                  marginRight: 4,
                  marginLeft: 12,
                  borderRadius: 16,
                }}
                source={KFC}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{marginVertical: 8}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 4,
            marginHorizontal: 14,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.foodName}>{'Food Recipe'}</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.viewAll}>{'View All'}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={image}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{
                  paddingVertical: 140,
                  paddingHorizontal: 124,
                  marginLeft: 12,
                  marginRight: 4,
                  borderRadius: 16,
                }}
                source={KFC}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export {_default as FlatListItem};
export default _default;
