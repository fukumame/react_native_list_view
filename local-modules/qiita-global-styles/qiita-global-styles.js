'use strict';
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet
} = ReactNative;

var GlobalStyles = StyleSheet.create({
  separator: {
         height: 1,
         backgroundColor: '#DDDDDD'
  },
  listView: {
         backgroundColor: '#F5FCFF'
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
  },
  thumbnail: {
      width: 100,
      height: 100,
      marginRight: 10
  },
  rightContainer: {
      flex: 1
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  name: {
      color: '#656565'
  },
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMessage: {
    flex: 1,
    fontSize: 20,
    color: '#656565',
  }
});

module.exports = GlobalStyles;
