import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <Image
          style={styles.imgs}
          source={require('../img/iconsplay.png')}></Image>
        <Text style={{fontSize: 15,color:'black',fontWeight:'bold'}}>
          MyProject
        </Text>
      </View>
      <View
        style={{
          width: 140,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <FontAwesome name="video-camera" size={20} color="#8BC34A" />
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <FontAwesome name="search" size={20} color="#8BC34A" />
        </TouchableOpacity>
        <FontAwesome name="user-circle" size={20} color="#8BC34A" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 4,
    justifyContent: 'space-between',
  },
  imgs: {
    height: 35,
    //marginRight: 5,
  },
});
