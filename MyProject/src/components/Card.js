import React, {Component, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Card(props) {
  const navigation = useNavigation();
  const [chaS, setChaS] = useState();

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${props.channelId}&key=AIzaSyAawyFAI1MK_0H6PjaiGpEOxf6llTNNi-o`,
    )
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) setChaS(json.items[0].snippet.thumbnails.medium.url);
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoPlay', {
          videoId: props.videoId,
          //title:props.title,
          //channel:props.channel,
        })
      }>
      <View style={{marginBottom: 5, marginTop: 5}}>
        <Image
          style={{width: '100%', height: 243}}
          source={{
            uri: `${props.url}`,
            //uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}></Image>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 100, marginTop: 4}}
            source={{uri: `${chaS}`}}></Image>
          {/* <FontAwesome name="user-circle" size={40} color="gray" /> */}
          <View style={{marginLeft: 13}}>
            <Text
              style={{fontSize: 14, width: Dimensions.get('screen').width - 70}}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {props.title}
            </Text>
            <View  style={{opacity: 0.7, marginTop:1,flexDirection:'row'}}>
              <Text style={{fontSize:12}}>{props.channel}  -  </Text>

        <Text style={{fontSize:12}} ellipsizeMode="tail" numberOfLines={1}>{props.publishedAt}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
