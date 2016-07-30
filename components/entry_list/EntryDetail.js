'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    WebView
} = ReactNative;

var EntryDetail = React.createClass({
  render: function(){
    return(
      <WebView
        source={{uri: this.props.url}}
      />
    );
  }
});

module.exports = EntryDetail;
