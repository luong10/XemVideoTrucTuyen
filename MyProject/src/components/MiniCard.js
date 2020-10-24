import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function MiniCard(props){
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        onPress={() => 
          navigation.navigate('videoPlay', {
            videoId:props.videoId,
            title:props.title,
            channel:props.channel,
          })
        }>
        <View style={{flexDirection: 'row', margin: 13, marginBottom: 0}}>
          <Image
            style={{width: '45%', height: 130}}
            source={{
              uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
            }}></Image>
          <View
            style={{
              paddingLeft: 10,
              paddingBottom: 8,
             
            }}>
            <Text
              style={{fontSize: 14, width: Dimensions.get('screen').width / 2,marginTop:4}}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                opacity: 0.7,
                width: Dimensions.get('screen').width / 2,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {props.channel}
            </Text>
            <Text
              style={{
                fontSize: 12,
                opacity: 0.7,
                width: Dimensions.get('screen').width / 2,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {props.publishedAt}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}
