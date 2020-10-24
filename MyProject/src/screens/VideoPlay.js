import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';

export default class VideoPlay extends Component {
  render() {
    const {videoId, title, channel} = this.props.route.params;

    return (
      <YouTube
        apiKey="AIzaSyAawyFAI1MK_0H6PjaiGpEOxf6llTNNi-o"
        videoId={videoId}
        play={true}
        loop={true}
        style={{width: '100%', height: 300}}
      />
    );
  }
}
