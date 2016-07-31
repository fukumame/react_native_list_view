import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
    WebView
} from 'react-native';

class EntryDetail extends Component {
  render(){
    return(
      <WebView
        source={{uri: this.props.url}}
      />
    );
  }
};

export default EntryDetail;
