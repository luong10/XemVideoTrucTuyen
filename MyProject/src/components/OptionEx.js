import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';

export default function OptionEx() {
  return (
    <View style={{backgroundColor:'#EBEBEB',paddingTop:13}}>
      <View
        style={{height: 110, flexWrap: 'wrap',alignContent:'center'}}>
        <ImageBackground
          borderRadius={7}
          style={{
            width: 213,
            height: 42,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight:10,
            marginBottom:13
          }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=527&q=80',
          }}>
          <Fontisto name="fire" size={20} color="white" />

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 7,
            }}>
            Trending
          </Text>
        </ImageBackground>
        <ImageBackground
          borderRadius={7}
          style={{
            width: 213,
            height: 42,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          source={{
            uri:
            'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80'
          }}>
          <Fontisto name="music-note" size={20} color="white" />

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 7,
            }}>
            Music
          </Text>
        </ImageBackground>
        <ImageBackground
          borderRadius={7}
          style={{
            width: 213,
            height: 42,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:13,
            marginLeft:5
          }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
          }}>
          <MaterialCommunityIcons
            name="youtube-gaming"
            size={20}
            color="white"
          />

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 7,
            }}>
            Gaming
          </Text>
        </ImageBackground>
        <ImageBackground
          borderRadius={7}
          style={{
            width: 213,
            height: 42,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft:5
          }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1598715558880-eeb2193ef048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          }}>
          <MaterialCommunityIcons
            name="newspaper-variant"
            size={20}
            color="white"
          />

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 7,
            }}>
            New
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}
