import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAuto: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=VN&videoCategoryId=1&key=AIzaSyAawyFAI1MK_0H6PjaiGpEOxf6llTNNi-o`,
    )
      .then((res) => res.json())
      .then((data) => {
        
        //console.log(data);
        this.setState({dataAuto: data.items});
      });
   
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header />
        <FlatList
          data={this.state.dataAuto}
          renderItem={({item}) => {
            return (
              <Card
                videoId={item.id}
                url={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                channelId={item.snippet.channelId}
                publishedAt={item.snippet.publishedAt}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
