import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import OptionEx from '../components/OptionEx';
import Header from '../components/Header';
import Card from '../components/Card';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cha:'',

      dataTrending: [],
    };
   
  }
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&regionCode=VN&key=AIzaSyAawyFAI1MK_0H6PjaiGpEOxf6llTNNi-o&maxResults=50`,
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        this.setState({dataTrending: data.items});
      });
    
  }
  
  render() {
    //const navigation = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header />
        <OptionEx />
        <View style={{height: 45, justifyContent: 'center'}}>
          <Text style={{fontSize: 16, marginLeft: 20}}>Trending videos</Text>
        </View>
        <FlatList
          data={this.state.dataTrending}
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
