'use strict';
var React = require('react');
var ReactNative = require('react-native');
var EntryDetail = require('./EntryDetail.js');
var globalStyles = require('qiita-global-styles');
var {
  Text,
  View,
  Image,
  TouchableHighlight
} = ReactNative;

var Entry = React.createClass ({
  _onPressed: function() {
    var entryData = this.props.entryData;
    this.props.navigator.push({
      title: entryData.title,
      component: EntryDetail,
      passProps: { url: entryData.url }
    });
  },
  render: function() {
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
});

module.exports = Entry;
