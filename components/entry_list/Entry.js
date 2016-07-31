import React, { Component } from 'react';
import ReactNative from 'react-native';
import EntryDetail from './EntryDetail.js';
import globalStyles from 'qiita-global-styles';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class Entry extends Component {
  _onPressed() {
    var entryData = this.props.entryData;
    this.props.navigator.push({
      title: entryData.title,
      component: EntryDetail,
      passProps: { url: entryData.url }
    });
  }
  render() {
    var index = this.props.index;
    var entryData = this.props.entryData;
    return(
      <TouchableHighlight onPress={() => this._onPressed()}>
        <View>
          <View style={globalStyles.container}>
            <Image source={{uri: entryData.user.profile_image_url}} style={globalStyles.thumbnail}/>
            <View style={globalStyles.rightContainer}>
              <Text style={globalStyles.title}>{entryData.title}</Text>
              <Text style={globalStyles.name}>{entryData.user.id}</Text>
            </View>
          </View>
          <View style={globalStyles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Entry;
